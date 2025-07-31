import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Welcome from '@site/src/components/Welcome'
import Install from '@site/src/components/Install'
import Demo from '@site/src/components/Demo'
import About from '@site/src/components/About'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.ossupstream.org/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '6']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();

  return (
    <Layout
      title={`Welcome to the ${siteConfig.title} website!`}
      description="llm-d: a Kubernetes-native high-performance distributed LLM inference framework">

      <main>
        <Welcome />
        {/* <About /> */}
        <Install />
        {/* <Demo /> */}
      </main>
    </Layout>
  );
}
