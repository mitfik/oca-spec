import{_ as o,r as p,c as r,a as t,b as e,e as n,w as a,d as i,o as l}from"./app-CNB60LOL.js";const c={},u=t("h1",null,"Swiss Passport Example",-1),d=i(`<h2 id="create-oca-bundle" tabindex="-1"><a class="header-anchor" href="#create-oca-bundle"><span>Create OCA Bundle</span></a></h2><p>The process starts with defining the passport schema, including all the attributes, their types, formats, etc. For this purpose, <a href="https://github.com/THCLab/oca-parser-xls/raw/main/templates/template.xlsx" target="_blank" rel="noopener noreferrer"> an empty XLS template </a> can be used or an already pre-baked template, available <a href="https://github.com/THCLab/oca-ecosystem/raw/main/examples/swiss_passport/digital_passport.xlsx" target="_blank" rel="noopener noreferrer">here</a>. We will continue with the latter template.</p><p>The next step is to create <a href="/ecosystem/oca-bundle"> OCA Bundle </a> from the template and to do so, we will use the <a href="/ecosystem/oca-browser"> OCA Browser </a> feature named <code>Develop</code>. Within our Sandbox, we host OCA Browser and we will use it to create the Bundle. The browser is accessible <a href="https://browser.oca.argo.colossi.network/#/" target="_blank" rel="noopener noreferrer">here</a>.</p><p>In the <code>Select OCA File</code> we use <a href="https://github.com/THCLab/oca-ecosystem/raw/main/examples/swiss_passport/digital_passport.xlsx" target="_blank" rel="noopener noreferrer">pre-baked template</a>. <code>Select OCA references files</code> we leave empty and for <code>Credential</code> and <code>Form</code> layout, we use <a href="https://github.com/THCLab/oca-ecosystem/tree/main/examples/swiss_passport/layouts" target="_blank" rel="noopener noreferrer">these layouts</a>.</p><p>To conduct the conversion, click on the <code>convert</code> button. If it succeeds, below you shall see the following: <code>Success! Click here to download OCA Bundle</code>.</p><h2 id="form-and-credential-preview" tabindex="-1"><a class="header-anchor" href="#form-and-credential-preview"><span>Form and Credential preview</span></a></h2><p>As the Bundle is created, we go to the next <a href="/ecosystem/oca-browser"> OCA Browser </a> feature named <a href="https://browser.oca.argo.colossi.network/#/preview" target="_blank" rel="noopener noreferrer"><code>Preview</code></a>.</p><p>In the <code>Pick OCA Bundle ZIP file</code> upload the Bundle created in the previous step. As a result, in the <code>FORM</code> tab the form preview will be rendered. This is the preview of the OCA Bundle using presentation overlays in the WEB space.</p><div class="custom-container tip"><p class="custom-container-title">Form and Credential translations</p><p>The <a href="https://github.com/THCLab/oca-ecosystem/raw/main/examples/swiss_passport/digital_passport.xlsx" target="_blank" rel="noopener noreferrer">pre-baked template</a> comes with two translations: English and French. Any number can be added, but for the sake of this example, we use only these two.</p><p>In the preview, both, so the Form and Credential contain a select widget to change the translation.</p></div><p>In the <code>CREDENTIAL</code> tab a passport specimen can be seen. Notice it is only the preview of the layout and schema. The data entries are missing. For preview all these combined we will use different tool that can be accessible <a href="https://demo.oca.argo.colossi.network/credential.html" target="_blank" rel="noopener noreferrer">here</a>.</p><p>We reuse the same OCA Bundle we created in the previous step. In the <code>Preview record SAID</code> we use pre-prepared data record with SAID: <code>ESEFRI_In7btcko9ov2IElxTKogunrDcv187n9Be7Kvc</code>. The data record behind is given as follows:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;documentType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PA&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;issuingState&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CHE&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;issuingStateCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;che&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;documentNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c0000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;primaryIdentifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;secondaryIdentifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Citizen&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;nationality&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CHE&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dateOfBirth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;28.01.0000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;personalNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;placeOfBirth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Luzern LU&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;optionalPersonalData&quot;</span><span class="token operator">:</span> <span class="token string">&quot;170&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dateOfIssue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11.07.0000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;issuedBy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Luzern LU&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dateOfExpiry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11.07.0000&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is stored on <a href="https://data-vault.argo.colossi.network/" target="_blank" rel="noopener noreferrer">https://data-vault.argo.colossi.network/</a>. As a next step, click <code>Load</code> that triggers rendering the preview. This time data record is visible.</p><div class="custom-container tip"><p class="custom-container-title">Custom data record</p><p>For preview any data record can be used. To do so, visit <a href="https://data-vault.argo.colossi.network/" target="_blank" rel="noopener noreferrer">https://data-vault.argo.colossi.network/</a> page where Swagger interface is available. Use the <code>GET /files/{DRI}</code> endpoint and then <code>try it out</code> button. As input provide known SAID: <code>ESEFRI_In7btcko9ov2IElxTKogunrDcv187n9Be7Kvc</code> and download the JSON file.</p><p>Changed JSON you can reupload to <a href="https://data-vault.argo.colossi.network/" target="_blank" rel="noopener noreferrer">https://data-vault.argo.colossi.network/</a> via <code>POST /files</code> endpoint and use the returned SAID as input for the <code>Preview record SAID</code> field.</p></div><h2 id="adding-authentication-taste" tabindex="-1"><a class="header-anchor" href="#adding-authentication-taste"><span>Adding authentication taste</span></a></h2><p>Whether the data can be proven to come from a verifiable source is the responsibility of an upper layer – the authentication layer. The authentication layer relies on public key cryptography. During the verification process, by verifying the signature along with the payload, it gives the non-repudiable answer whether the data has tampered.</p><p>In the following demo we introduce novel, authentication layer-related concepts:</p><ul><li><a href="https://www.ietf.org/archive/id/draft-ssmith-acdc-02.html" target="_blank" rel="noopener noreferrer">ACDC</a> – Authentic Chained Data Containers;</li><li><a href="http://dkms.colossi.network/" target="_blank" rel="noopener noreferrer">DKMS</a> – Decentralised Key Management System.</li></ul><p><a href="https://demo.oca.argo.colossi.network/acdc.html" target="_blank" rel="noopener noreferrer">Here</a> we demonstrate a <a href="https://www.ietf.org/archive/id/draft-ssmith-acdc-02.html#name-compact-acdc" target="_blank" rel="noopener noreferrer"> compact ACDC </a> that represents the passport credential. The sample credential in the <code>Issue</code> section is defined as follows:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;v&quot;</span><span class="token operator">:</span><span class="token string">&quot;ACDC10JSON00011c_&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;i&quot;</span><span class="token operator">:</span><span class="token string">&quot;DdUXsE9lsnc5vbSOQVG8khiqe-ICXd6F-Gf5nkfWRxFs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;s&quot;</span><span class="token operator">:</span><span class="token string">&quot;Eohm-VG6JcT2HwU9IvM_Ujp6lIgwhg34TvXUtVqv_L3I&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;a&quot;</span><span class="token operator">:</span><span class="token string">&quot;ESEFRI_In7btcko9ov2IElxTKogunrDcv187n9Be7Kvc&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;p&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;r&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;d&quot;</span><span class="token operator">:</span><span class="token string">&quot;EQD7oAeqJOWoWYzrI1cu_Bzipr3RcpBsGkThK_L1eUEA&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is a map of key-value pairs, where <code>s</code> and <code>a</code> are interesting in particular. <code>s</code> stands for <code>schema</code>, and <code>a</code> stands for <code>attributes</code>. In <code>s</code> we use SAID of the OCA Bundle from the above example and in <code>a</code> we use data record SAID from the above example. By doing this, we embedded OCA into the ACDC.</p><p>The ACDC itself is not yet signed and we sign it using public key cryptography. For the sake of the example, assume the key pair is generated from a 32 bytes seed <code>MDM0ZjczNmEyMGM1NDUyZGI3M2E3ODU1MTVjOGJiZTU=</code>. Using private key of such key pair, this creates the 64 bytes length signature <code>T6XBbjKSISmpJN9WMRxw3ay+6oL3ww0K0AbQGLP4Mx3McTd8LMQ0Un0RKUnHtH5WR2yhb6r+SSuO43iZddloDA==</code>. (using <code>ED25519</code> algorithm). We can verify the signature using JavaScript and <code>tweetnacl</code> library. The following code snippet presents the verification:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> nacl <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;tweetnacl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> keypair <span class="token operator">=</span> nacl<span class="token punctuation">.</span>sign<span class="token punctuation">.</span>keyPair<span class="token punctuation">.</span><span class="token function">fromSeed</span><span class="token punctuation">(</span></span>
<span class="line">  Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;MDM0ZjczNmEyMGM1NDUyZGI3M2E3ODU1MTVjOGJiZTU=&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;base64&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> nacl<span class="token punctuation">.</span>sign<span class="token punctuation">.</span>detached<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span></span>
<span class="line">  Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{&quot;v&quot;:&quot;ACDC10JSON00011c_&quot;,&quot;i&quot;:&quot;DdUXsE9lsnc5vbSOQVG8khiqe-ICXd6F-Gf5nkfWRxFs&quot;,&quot;s&quot;:&quot;Eohm-VG6JcT2HwU9IvM_Ujp6lIgwhg34TvXUtVqv_L3I&quot;,&quot;a&quot;:&quot;ESEFRI_In7btcko9ov2IElxTKogunrDcv187n9Be7Kvc&quot;,&quot;p&quot;:[],&quot;r&quot;:[],&quot;d&quot;:&quot;EQD7oAeqJOWoWYzrI1cu_Bzipr3RcpBsGkThK_L1eUEA&quot;}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&quot;T6XBbjKSISmpJN9WMRxw3ay+6oL3ww0K0AbQGLP4Mx3McTd8LMQ0Un0RKUnHtH5WR2yhb6r+SSuO43iZddloDA==&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;base64&quot;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  keypair<span class="token punctuation">.</span>publicKey</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Skipping all the details related to the authentication layer, that take place before the presentation layer is employed, we can finally <code>render credential</code> directly from an ACDC credential to see the passport specimen preview. The OCA Bundle containing all the details for presentation is unknown to the ACDC, therefore it has to be resolved from a third-party service, where the Bundle is stored. It can be an <a href="/ecosystem/oca-repository">OCA Repository</a> instance, however, it is not essential. OCA Bundle can be stored anywhere from <code>AWS S3</code> to <code>IPFS</code>.</p>`,24);function h(k,m){const s=p("RouteLink");return l(),r("div",null,[u,t("p",null,[e("Below we introduce a step by step guidance of utilizing "),n(s,{to:"/specification/#label-overlay"},{default:a(()=>[e(" Semantic (Label) ")]),_:1}),e(" and "),n(s,{to:"/specification/#presentation-overlays"},{default:a(()=>[e(" Presentation ")]),_:1}),e(" Overlays in action for rendering credential – Swiss Passport specimen.")]),d])}const g=o(c,[["render",h],["__file","swiss-passport-example.html.vue"]]),b=JSON.parse('{"path":"/guide/applications/swiss-passport-example.html","title":"Swiss Passport Example","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Create OCA Bundle","slug":"create-oca-bundle","link":"#create-oca-bundle","children":[]},{"level":2,"title":"Form and Credential preview","slug":"form-and-credential-preview","link":"#form-and-credential-preview","children":[]},{"level":2,"title":"Adding authentication taste","slug":"adding-authentication-taste","link":"#adding-authentication-taste","children":[]}],"git":{"updatedTime":1721159664000},"filePathRelative":"guide/applications/swiss-passport-example.md"}');export{g as comp,b as data};