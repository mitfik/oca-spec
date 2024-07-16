import{_ as a,r as e,c as t,a as p,b as s,e as o,w as l,d as i,o as c}from"./app-CNB60LOL.js";const r={},u=i(`<h1>Getting started</h1><h2 id="create-the-bundles-with-ocafile" tabindex="-1"><a class="header-anchor" href="#create-the-bundles-with-ocafile"><span>Create the Bundles with OCAFile</span></a></h2><ol><li><p>Download the <a href="https://github.com/THCLab/oca-bin/releases" target="_blank" rel="noopener noreferrer">OCA Bin</a> for your platform.</p></li><li><p>Create a new file named <code>example.ocafile</code> with the following content:</p><div class="language-ocafile line-numbers-mode" data-highlighter="prismjs" data-ext="ocafile" data-title="ocafile"><pre class="language-ocafile"><code><span class="line">-- name=test-bundle</span>
<span class="line"># Example credential schema</span>
<span class="line">ADD ATTRIBUTE d=Text i=Text passed=Boolean</span>
<span class="line">ADD META en PROPS name=&quot;Entrance credential&quot; description=&quot;Entrance credential&quot;</span>
<span class="line">ADD CHARACTER_ENCODING ATTRS d=utf-8 i=utf-8 passed=utf-8</span>
<span class="line">ADD CONFORMANCE ATTRS d=M i=M passed=M</span>
<span class="line">ADD LABEL en ATTRS d=&quot;Schema digest&quot; i=&quot;Credential Issuee&quot; passed=&quot;Passed&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Run the <code>oca-bin</code> command line interface:</p><div class="custom-container tip"><p class="custom-container-title">Init config</p><p>When running the <code>oca</code> command for the first time, it will ask for the config initialization: <code>OCA config not found do you want to initialize it in your home directory? (y/N) y</code></p></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">./oca build <span class="token parameter variable">--ocafile</span> example.ocafile</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Result: OCA bundle created in local repository with SAID: EFhaY1-6ynjvxNUPY4HnbB-OXr05wULXE4Yet3FHzGP6</span></span>
<span class="line"><span class="token comment"># and name: test-bundle</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>List Bundles in the local Repository:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">./oca list</span>
<span class="line"></span>
<span class="line">SAID: EFhaY1-6ynjvxNUPY4HnbB-OXr05wULXE4Yet3FHzGP6, name: test-bundle</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get the OCA Bundle for the above SAID:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">./oca get <span class="token parameter variable">--said</span> EFhaY1-6ynjvxNUPY4HnbB-OXr05wULXE4Yet3FHzGP6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div style="max-height:400px;overflow-y:auto;"><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;bundle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EFhaY1-6ynjvxNUPY4HnbB-OXr05wULXE4Yet3FHzGP6&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;capture_base&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EL4q2aahA0RN-ftw97E_fmbVDVTyDbIaQR2B44HGsqFG&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spec/capture_base/1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;classification&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Text&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Text&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;passed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Boolean&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;flagged_attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;overlays&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;character_encoding&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EOFWz7wYV2aQZzFRZf5_7hGoYOE3TeHl_iHoIsTQHX7h&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spec/overlays/character_encoding/1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;capture_base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EL4q2aahA0RN-ftw97E_fmbVDVTyDbIaQR2B44HGsqFG&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;attribute_character_encoding&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;passed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;utf-8&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ELHseD741CQMbFp49of8qNjgdyKd9gubDvcAjIqCVQKw&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eng&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spec/overlays/meta/1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;capture_base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EL4q2aahA0RN-ftw97E_fmbVDVTyDbIaQR2B44HGsqFG&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Entrance credential&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Entrance credential&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EHAJTB4yLtruZC6fmfCwlGmUDtlkIHrjTNOwrlvkmAtP&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eng&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spec/overlays/label/1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;capture_base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EL4q2aahA0RN-ftw97E_fmbVDVTyDbIaQR2B44HGsqFG&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;attribute_labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Schema digest&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Credential Issuee&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;passed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Passed&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;attribute_categories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;category_labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;conformance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EKzjcqJuiOKTVeSMRYNZsWnUsmnEiyv-8Uj1knydBfbU&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spec/overlays/conformance/1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;capture_base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EL4q2aahA0RN-ftw97E_fmbVDVTyDbIaQR2B44HGsqFG&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;attribute_conformance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;d&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;passed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></li></ol><h2 id="interact-with-the-oca-repository" tabindex="-1"><a class="header-anchor" href="#interact-with-the-oca-repository"><span>Interact with the OCA Repository</span></a></h2><p>All the above steps were executed locally, without interacting with any OCA Repository. Let&#39;s now publish the Bundle to the OCA Repository.</p><ol><li><p>Run <code>./oca config</code>. It will print the current configuration that looks like (depending on your platform):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">Local repository: <span class="token string">&quot;/home/&lt;user&gt;/.oca/oca_repository&quot;</span></span>
<span class="line">OCA Cache: <span class="token string">&quot;/home/&lt;user&gt;/.oca/oca_cache&quot;</span></span>
<span class="line">Index DB: <span class="token string">&quot;/home/&lt;user&gt;/.oca/read_db&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Assumig the same platform as above, the config file is stored in <code>/home/&lt;user&gt;/.oca/config.toml</code></p></li><li><p>Add the OCA Repository hosted within HCF Sandbox:</p><div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="line"><span class="token key property">repository_url</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://repository.oca.argo.colossi.network/api/&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Publish the Bundle to the OCA Repository:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">./oca publish <span class="token parameter variable">--said</span> EFhaY1-6ynjvxNUPY4HnbB-OXr05wULXE4Yet3FHzGP6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>alternatively, specify repository url via parameter:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">./oca publish <span class="token parameter variable">--said</span> EFhaY1-6ynjvxNUPY4HnbB-OXr05wULXE4Yet3FHzGP6 --repository-url https://repository.oca.argo.colossi.network/api/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>The Bundle is now resolvable also remotely:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> <span class="token string">&#39;GET&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token string">&#39;https://repository.oca.argo.colossi.network/api/oca-bundles/EFhaY1-6ynjvxNUPY4HnbB-OXr05wULXE4Yet3FHzGP6&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token parameter variable">-H</span> <span class="token string">&#39;accept: application/json&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="setup-own-oca-repository" tabindex="-1"><a class="header-anchor" href="#setup-own-oca-repository"><span>Setup own OCA Repository</span></a></h2>`,7);function d(v,k){const n=e("RouteLink");return c(),t("div",null,[u,p("p",null,[s("Setup the "),o(n,{to:"/ecosystem/oca-repository.html#download-and-installation"},{default:l(()=>[s("OCA Repository")]),_:1})])])}const b=a(r,[["render",d],["__file","getting-started.html.vue"]]),h=JSON.parse('{"path":"/guide/usage/getting-started.html","title":"Getting started","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Create the Bundles with OCAFile","slug":"create-the-bundles-with-ocafile","link":"#create-the-bundles-with-ocafile","children":[]},{"level":2,"title":"Interact with the OCA Repository","slug":"interact-with-the-oca-repository","link":"#interact-with-the-oca-repository","children":[]},{"level":2,"title":"Setup own OCA Repository","slug":"setup-own-oca-repository","link":"#setup-own-oca-repository","children":[]}],"git":{"updatedTime":1721159664000},"filePathRelative":"guide/usage/getting-started.md"}');export{b as comp,h as data};
