-- =============================================================================
-- Migration: 0028_fix_auth_logging.sql
-- Description: Fixes a critical schema mismatch in the log_auth_event trigger
--              which was crashing Supabase GoTrue with a 500 error on login.
-- =============================================================================

CREATE OR REPLACE FUNCTION public.log_auth_event()
RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  -- Log login events when last_sign_in_at changes
  IF TG_OP = 'UPDATE' AND (OLD.last_sign_in_at IS DISTINCT FROM NEW.last_sign_in_at) THEN
    INSERT INTO public.activity_logs (
      user_id,
      activity_type,
      metadata
    ) VALUES (
      NEW.id,
      'login',
      jsonb_build_object(
        'email', NEW.email,
        'last_sign_in_at', NEW.last_sign_in_at,
        'provider', NEW.raw_app_meta_data->>'provider'
      )
    );
  END IF;

  RETURN NEW;
END;
$$;
