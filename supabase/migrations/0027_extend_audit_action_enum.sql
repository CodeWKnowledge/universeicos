-- Migration: 0027_extend_audit_action_enum.sql
-- Description: Adds 'site_reset' to the audit_action enum so the
--              reset_site_for_launch RPC can write its audit log entry.

ALTER TYPE public.audit_action ADD VALUE IF NOT EXISTS 'site_reset';
