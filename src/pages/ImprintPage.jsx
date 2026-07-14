import { useEffect } from "react"
import LegalPageLayout from "../components/layout/LegalPageLayout"

function ImprintPage() {
  useEffect(() => {
    document.title = "Impressum — wailsolaiman.com"
    return () => {
      document.title = "Wail Solaiman"
    }
  }, [])

  return (
    <LegalPageLayout title="Impressum">
      <p className="font-medium text-text-primary">Angaben gemäß § 5 TMG</p>

      <address className="mt-6 not-italic">
        Wail Solaiman
        <br />
        Freiberuflicher Frontend-Entwickler
        <br />
        Clemensstraße
        <br />
        23552 Lübeck
        <br />
        Deutschland
      </address>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">Einzelunternehmen</h2>
        <p>
          Diese Website wird im Rahmen meines Einzelunternehmens betrieben:
        </p>
        <p>
          <strong>WS Code-Online</strong>
          <br />
          <a
            href="https://wscode.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            https://wscode.online/
          </a>
          <br />
          Inhaber: Wail Solaiman
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">Kontakt</h2>
        <p>
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
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          Kleinunternehmerregelung
        </h2>
        <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p>
          Wail Solaiman
          <br />
          Clemensstraße, 23552 Lübeck, Deutschland
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          EU-Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
          (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-2 hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          <br />
          Unsere E-Mail-Adresse finden Sie oben.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
          TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">
          Haftung für Links
        </h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
          wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
          keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
          jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-text-primary">Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
          bzw. Erstellers.
        </p>
      </section>

      <p className="mt-10 text-sm text-text-secondary">Stand: Juli 2026</p>
    </LegalPageLayout>
  )
}

export default ImprintPage
