import Layout from '@comps/layout'
import Hero from '@comps/Hero'
import TwoColumn from '@comps/TwoColumn'
import Card from '@comps/Card'

import { data } from '../data'

export default function Home() {
  return (
    <Layout
      globalClass='app'
      siteTitle={data.siteTitle}
      siteDescription={data.siteTitle}
      mainCtaLabel={data.navMainCta.label}
      mainCtaHref={data.navMainCta.href}
      companyName={data.companyName}
    >

      <Hero
        mainCtaLabel={data.navMainCta.label}
        mainCtaHref={data.navMainCta.href}
      />

      <TwoColumn
        subhead='Step 1'
        headline='Add listing addresses'
        subcopy='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />

      <TwoColumn
        subhead='Step 2'
        headline='Compare all listings'
        subcopy='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      />

      <TwoColumn
        subhead='Step 3'
        headline='Find the best match'
        subcopy='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />

      <TwoColumn
        themeClass='theme-dark'
        subhead='Latest Releases'
        headline='Always enhancing your experience'
        subcopy='We iterate and push updates as frequently as we can. Stay up-to-date with all the enhancements as-soon-as they are released. All in pursuit of our mission of making comparing houses simpler.'
      >
        <Card
          sub='Version 0.1'
          headline='Initial Release'
        />
      </TwoColumn>
    </Layout>
  )
}
