import React from 'react'
import { Text, Section } from '@react-email/components'
import { UniverseLayout, BRAND } from '../../components/UniverseLayout.tsx'
import { EmailButton } from '../../components/EmailButton.tsx'
import { EmailCallout } from '../../components/EmailCallout.tsx'

export interface AdminPromotedEmailProps {
  recipientName?: string
  inviterName?: string
  role?: string
  adminPortalUrl?: string
}

export function AdminPromotedEmail({
  recipientName = 'there',
  inviterName = 'The Universe Team',
  role = 'Administrator',
  adminPortalUrl = 'https://admin.universeicos.app',
}: AdminPromotedEmailProps) {
  return (
    <UniverseLayout preview={`You've been promoted to ${role} on Universe`} unsubscribeUrl={null}>
      <Section style={{ marginBottom: '28px' }}>
        <Text style={{ fontSize: '28px', fontWeight: '800', color: BRAND.textDark, margin: '0 0 8px', lineHeight: '1.2' }}>
          You've been promoted! 🚀
        </Text>
        <Text style={{ fontSize: '16px', color: BRAND.textMid, margin: '0', lineHeight: '1.6' }}>
          Hi {recipientName}, you've been upgraded to a new role on Universe.
        </Text>
      </Section>

      {/* Role badge */}
      <Section
        style={{
          backgroundColor: BRAND.bgSubtle,
          border:          `1px solid ${BRAND.borderColor}`,
          borderRadius:    '10px',
          padding:         '16px 20px',
          marginBottom:    '24px',
        }}
      >
        <Text style={{ fontSize: '13px', color: BRAND.textLight, margin: '0 0 4px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Your New Role
        </Text>
        <Text style={{ fontSize: '18px', fontWeight: '700', color: BRAND.primary, margin: '0' }}>
          {role}
        </Text>
      </Section>

      <Text style={{ fontSize: '15px', color: BRAND.textMid, lineHeight: '1.7', margin: '0 0 28px' }}>
        <strong>{inviterName}</strong> has granted you admin access to the Universe platform. You can now sign into the Admin Portal using your existing account credentials — no new password required.
      </Text>

      <EmailButton href={adminPortalUrl} variant="primary" fullWidth>
        Open Admin Portal →
      </EmailButton>

      <EmailCallout variant="info" title="Use your existing password">
        Since your Universe account already exists, simply log in with the email and password you already have. If you've forgotten your password, use the "Forgot Password" link on the login page.
      </EmailCallout>
    </UniverseLayout>
  )
}
