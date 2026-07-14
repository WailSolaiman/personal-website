import { useEffect } from "react"
import LegalPageLayout from "../components/layout/LegalPageLayout"

function PrivacyPage() {
  useEffect(() => {
    document.title = "Datenschutz — wailsolaiman.com"
    return () => {
      document.title = "Wail Solaiman"
    }
  }, [])

  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <p>
        <strong>Kurz gesagt:</strong> Diese Website ist mein Portfolio. Es gibt keine
        Werbung und keine invasiven Tracker. Ich erhebe nur das, was für den Betrieb
        der Seite nötig ist — und anonyme, aggregierte Besuchsstatistiken.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          1. Verantwortlicher
        </h2>
        <address className="not-italic">
          Wail Solaiman
          <br />
          Freiberuflicher Frontend-Entwickler
          <br />
          Clemensstraße
          <br />
          23552 Lübeck, Deutschland
          <br />
          E-Mail:{" "}
          <a
            href="mailto:contact@wailsolaiman.com"
            className="text-primary underline-offset-2 hover:underline"
          >
            contact@wailsolaiman.com
          </a>
          {", "}
          <a
            href="mailto:me@wailsolaiman.com"
            className="text-primary underline-offset-2 hover:underline"
          >
            me@wailsolaiman.com
          </a>
        </address>
        <p>
          Einzelunternehmen:{" "}
          <strong>WS Code-Online</strong> —{" "}
          <a
            href="https://wscode.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            wscode.online
          </a>
        </p>
        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO).</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          2. Geltungsbereich
        </h2>
        <p>
          Diese Datenschutzerklärung gilt für die Website wailsolaiman.com (Portfolio).
        </p>
        <p>
          Separat betrieben wird das Kundenportal unter portal.wailsolaiman.com. Dort
          gelten ergänzend die Hinweise in Abschnitt 9. Transaktions-E-Mails aus dem
          Kundenportal verlinken auf diese Seiten.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">3. Grundsätze</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Keine Werbeanzeigen auf dieser Website</li>
          <li>Kein Verkauf personenbezogener Daten</li>
          <li>Kein invasive Tracking-Pixel von Drittanbietern zu Marketingzwecken</li>
          <li>Analytics nur in aggregierter Form, ohne Cookies (siehe Abschnitt 5)</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          4. Hosting, Server-Logs und technische Bereitstellung
        </h2>
        <p>
          Beim Aufruf dieser Website werden technisch notwendige Daten verarbeitet, damit
          die Seite ausgeliefert und stabil betrieben werden kann — z. B. IP-Adresse,
          Datum und Uhrzeit des Zugriffs, angeforderte URL, Browsertyp/-version,
          Betriebssystem, Referrer-URL und ggf. Fehlermeldungen.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an einem sicheren und funktionsfähigen Webauftritt).
        </p>
        <p>
          <strong>Speicherdauer:</strong> Server-Logs werden nur so lange vorgehalten,
          wie es für Betrieb, Fehleranalyse und Sicherheit erforderlich ist, und danach
          gelöscht oder anonymisiert.
        </p>
        <p>
          <strong>Hosting:</strong>{" "}
          <a
            href="https://www.hetzner.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            Hetzner Online GmbH
          </a>
          <br />
          Datenschutzerklärung:{" "}
          <a
            href="https://www.hetzner.com/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            https://www.hetzner.com/legal/privacy-policy/
          </a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          5. Webanalyse mit Plausible (cookie-frei)
        </h2>
        <p>
          Ich nutze Plausible Analytics, betrieben auf einer selbst gehosteten Subdomain
          (<strong>plausible.wailsolaiman.com</strong>) mit Infrastruktur in der EU.
          Plausible setzt keine Cookies und speichert keine personenbezogenen Profile.
        </p>
        <p>Erfasst werden ausschließlich aggregierte Metriken, z. B.:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Seitenaufrufe</li>
          <li>ungefähre Herkunft (Land/Region)</li>
          <li>Gerätetyp, Browser und Betriebssystem (in aggregierter Form)</li>
          <li>Verweildauer und Absprungrate</li>
          <li>Klicks auf ausgehende Links (aggregiert)</li>
        </ul>
        <p>
          Es werden keine Daten an Werbenetzwerke weitergegeben. Eine Identifikation
          einzelner Besucher ist nicht vorgesehen.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an anonymen Nutzungsstatistiken zur Verbesserung der Website).
        </p>
        <p>
          Weitere Informationen:{" "}
          <a
            href="https://plausible.io/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            https://plausible.io/privacy
          </a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          6. Lokale Speicherung im Browser (localStorage)
        </h2>
        <p>
          Ihre Auswahl für Sprache und Darstellungsmodus (z. B. helles/dunkles Theme)
          kann lokal in Ihrem Browser gespeichert werden (localStorage). Diese Daten
          verbleiben auf Ihrem Gerät und werden nicht an mich übermittelt.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an einer komfortablen, wiedererkennbaren Nutzung der Website).
        </p>
        <p>Sie können localStorage jederzeit in den Browser-Einstellungen löschen.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          7. Kontakt per E-Mail
        </h2>
        <p>
          Auf dieser Portfolio-Website gibt es kein Kontaktformular. Wenn Sie mich per
          E-Mail kontaktieren, verarbeite ich die von Ihnen mitgeteilten Daten (z. B.
          Name, E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung
          Ihrer Anfrage.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong>
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Art. 6 Abs. 1 lit. b DSGVO — bei Anfragen im Zusammenhang mit einem Vertrag
            oder vorvertraglichen Maßnahmen
          </li>
          <li>Art. 6 Abs. 1 lit. f DSGVO — bei allgemeinen Anfragen</li>
        </ul>
        <p>
          Die Übermittlung erfolgt über Ihren E-Mail-Anbieter; dessen
          Datenschutzbestimmungen gelten für den Versandweg.
        </p>
        <p>
          <strong>Speicherdauer:</strong> Nach Abschluss der Kommunikation, sofern keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          8. Externe Links und eingebettete Dienste
        </h2>
        <p>
          Diese Website kann Links zu externen Angeboten enthalten (z. B. GitHub,
          LinkedIn, Projekt-Demos). Für Inhalte und Datenschutz auf diesen externen
          Seiten sind allein die jeweiligen Betreiber verantwortlich. Wenn Sie diese
          Links anklicken, gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          9. Kundenportal (portal.wailsolaiman.com)
        </h2>
        <p>
          Für bestehende Kunden betreibe ich ein separates Kundenportal. Dort können u.
          a. folgende Daten verarbeitet werden:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Registrierungs- und Kontodaten (z. B. Name, E-Mail, Firma)</li>
          <li>Projekt-, Datei- und Support-Inhalte</li>
          <li>Rechnungs- und Zahlungsdaten (Zahlungsabwicklung über Stripe)</li>
          <li>Authentifizierungsdaten und Sitzungsinformationen (Supabase Auth)</li>
          <li>
            Versand transaktionaler E-Mails (z. B. Einladungen, Rechnungen,
            Support-Benachrichtigungen über Resend)
          </li>
        </ul>
        <p>
          Diese Verarbeitung erfolgt zur Vertragserfüllung und zur Bereitstellung des
          Portals.
        </p>
        <p>
          <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag),
          ggf. Art. 6 Abs. 1 lit. f DSGVO (Betrieb und Sicherheit des Portals).
        </p>
        <p>
          <strong>Auftragsverarbeiter:</strong>
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Hetzner (Hosting) —{" "}
            <a
              href="https://www.hetzner.com/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              https://www.hetzner.com/legal/privacy-policy/
            </a>
          </li>
          <li>
            Supabase (Datenbank, Auth, Dateispeicher) —{" "}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              https://supabase.com/privacy
            </a>
          </li>
          <li>
            Stripe (Zahlungen) —{" "}
            <a
              href="https://stripe.com/de/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              https://stripe.com/de/privacy
            </a>
          </li>
          <li>
            Resend (E-Mail-Versand) —{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              https://resend.com/legal/privacy-policy
            </a>
          </li>
        </ul>
        <p>
          Kunden des Portals erhalten im Rahmen der Nutzung gesonderte Informationen über
          Zweck und Umfang der Verarbeitung. Bei Fragen:{" "}
          <a
            href="mailto:contact@wailsolaiman.com"
            className="text-primary underline-offset-2 hover:underline"
          >
            contact@wailsolaiman.com
          </a>
          {", "}
          <a
            href="mailto:me@wailsolaiman.com"
            className="text-primary underline-offset-2 hover:underline"
          >
            me@wailsolaiman.com
          </a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">10. Ihre Rechte</h2>
        <p>
          Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie betreffenden
          personenbezogenen Daten:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
          <li>
            Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) — mit Wirkung für die
            Zukunft
          </li>
        </ul>
        <p>
          Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Zuständig in Schleswig-Holstein (Beispiel für Lübeck):
        </p>
        <p>
          Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)
          <br />
          <a
            href="https://www.datenschutzzentrum.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            https://www.datenschutzzentrum.de/
          </a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          11. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Ich behalte mir vor, diese Datenschutzerklärung anzupassen, wenn sich die
          Website, eingesetzte Dienste oder Rechtslage ändern. Die jeweils aktuelle
          Fassung ist unter wailsolaiman.com/privacy abrufbar.
        </p>
      </section>

      <p className="mt-10 text-sm text-text-secondary">Stand: Juli 2026</p>
    </LegalPageLayout>
  )
}

export default PrivacyPage
