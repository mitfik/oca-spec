import{_ as e,c as t,o as a,d as i}from"./app-CNB60LOL.js";const n={},s=i(`<h1>OCAFile Technical Specification</h1><dl><dt> Authors: </dt><dd><p>Robert Mitwicki (<a href="https://humancolossus.foundation/" target="_blank" rel="noopener noreferrer"> Human Colossus Foundation </a>)<br> Michal Pietrus (<a href="https://argonauths.eu/" target="_blank" rel="noopener noreferrer"> ArgonAUTHs </a>)</p></dd><dt> Copyrights: </dt><dd> Human Colossus Foundation, EUPL v1.2 licence. </dd><dt> Contact: </dt><dd><p><a href="mailto:contact@humancolossus.org" target="_blank" rel="noopener noreferrer"> contact@humancolossus.org </a></p></dd></dl><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p><em>This section is informative</em></p><p>This document proposes a novel OCA Bundle long-term maintenance concept: <code>OCAfile</code>. It is equipped with a Domain-Specific Language (DSL) to leverage OCA Bundles creation. With proposed DSL, <code>OCAfile&#39;s</code> can be created by individuals using any type of text editor, as well as by more tailored graphical editors that internally serialize their state into <code>OCAfile&#39;s</code> syntax.</p><h2 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose"><span>Purpose</span></a></h2><p><em>This section is informative</em></p><p>Define OCAFile syntax to create OCA Bundles. Syntax consists of text-based operations that are pleasant to read and write and are at the same time, machine readable.</p><h2 id="main-characteristics" tabindex="-1"><a class="header-anchor" href="#main-characteristics"><span>Main characteristics</span></a></h2><p><em>This section is informative</em></p><h3 id="deterministic-through-layered-architecture" tabindex="-1"><a class="header-anchor" href="#deterministic-through-layered-architecture"><span>Deterministic through layered architecture</span></a></h3><p>The OCAfile benefits from the concept of versioning each new operation by building a provenance log of all commands. Recall that a provenance log is an append-only log that consists of items, where each new item is defined as follows: <code>digest(previous item) | current item</code>. Calculating the digest upon it gives the current item (layer) digest.</p><p>As digests determine layers, any new OCA Bundle construct might already benefit from a previously defined OCA Bundle. That is because both OCA Bundles might involve the same attribute names, for example. The directed acyclic graph keeps the layers in vertices (their digests). It ensures the unambiguous resolution of any layer.</p><h3 id="text-based-format" tabindex="-1"><a class="header-anchor" href="#text-based-format"><span>Text based format</span></a></h3><p>The OCAfile remains text based for readability</p><h3 id="pleasant-dsl" tabindex="-1"><a class="header-anchor" href="#pleasant-dsl"><span>Pleasant DSL</span></a></h3><p>The OCAfile relies on a domain-specific language (DSL) that is human and machine-readable to achieve deterministic layering. The DSL enables the creation and manipulation of the OCA Bundle during its lifetime.</p><h3 id="version-control-system-compliant" tabindex="-1"><a class="header-anchor" href="#version-control-system-compliant"><span>Version control system compliant</span></a></h3><p>As opposed to binary files, text files enable meaningful changes control under a version control system (VCS).</p><h2 id="ocafile-dsl" tabindex="-1"><a class="header-anchor" href="#ocafile-dsl"><span>OCAfile DSL</span></a></h2><p>OCAfile has the exhaustive grammar available <a href="https://raw.githubusercontent.com/THCLab/oca-rs/main/oca-file/src/ocafile.pest" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="preprocessor-directives" tabindex="-1"><a class="header-anchor" href="#preprocessor-directives"><span>Preprocessor directives</span></a></h3><p>Each OCAfile MAY have preprocessor directives defined at the beginning of each file. Preprocessor directives terminate with either a newline character or the command. They define additional metadata of the OCAfile. Each directive MUST consist of a key, followed by a value: <code># directive=value</code>. Both must match <code>[a-zA-Z0-9\\-]+</code> regular expression.</p><p>The OCAfile MUST support the following directives:</p><ul><li>The <code>escape</code> directive sets the character used to escape characters in an OCAfile. If not specified, the default escape character is <code>\\</code>.</li><li>The <code>newline</code> directive sets the line separation character in the OCAfile. If not specified, the default escape character is <code>\\n</code>.</li></ul><h3 id="meta-directives" tabindex="-1"><a class="header-anchor" href="#meta-directives"><span>Meta directives</span></a></h3><p>Each OCAfile MAY have meta directives defined at the beginning of each file. Meta directives terminate with a newline character. They define additional metadata of the OCAfile. Each directive MUST consist of a key, followed by a value: <code>-- directive=value</code>. Both must match <code>[a-zA-Z0-9\\-]+</code> regular expression.</p><ul><li>The <code>name</code> directive sets the human meaningful name of the OCAfile. It is a named reference to be used along with the <code>refn</code> prefix when defining references (see below for Reference).</li><li>The <code>version</code> directive sets the version of the OCAfile.</li></ul><h3 id="commands" tabindex="-1"><a class="header-anchor" href="#commands"><span>Commands</span></a></h3><p>A <code>Command</code> is defined as:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">[OPERATION] [OCA OBJECT] [ARGUMENTS]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>Command</code> MUST be case-insensitive. A <code>Command</code> starts from one of the keywords specified below and terminates with the <code>newline</code> character.</p><h4 id="command-operation" tabindex="-1"><a class="header-anchor" href="#command-operation"><span><code>Command</code> operation</span></a></h4><ul><li><code>ADD &lt;ATTRIBUTE | FLAGGED_ATTRIBUTES | CLASSIFICATION | OCA OBJECT&gt;</code> – adds the new element in the given object</li><li><code>ALTER &lt;ATTRIBUTE | FLAGGED_ATTRIBUTES | CLASSIFICATION | OCA OBJECT&gt;</code> – modifies existing elements to keep a provenance log of a specific attribute</li><li><code>REMOVE &lt;ATTRIBUTE | FLAGGED_ATTRIBUTES | CLASSIFICATION | OCA OBJECT&gt;</code> – removes element in a given object. If it does not exist, it must throw an error</li><li><code>FROM &lt;SAID&gt;</code> – sets the base <code>OCA Bundle</code> for subsequent instructions using its SAID. If in use, the command with <code>FROM</code> must be the first command in OCAFile.</li></ul><h4 id="command-support-for-oca-objects" tabindex="-1"><a class="header-anchor" href="#command-support-for-oca-objects"><span><code>Command</code> support for OCA objects</span></a></h4><p>The following OCA objects have the OCAFile equivalent:</p><ul><li>capture base <ul><li>attributes management</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; ATTRIBUTE &lt;Attribute Name&gt;=&lt;Attribute Type&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>PII&#39;s management</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; FLAGGED_ATTRIBUTES &lt;Attribute Name 1&gt; &lt;Attribute Name 2&gt; &lt;Attribute Name N&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Classification management</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; CLASSIFICATION &lt;Classification Name&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>character-econding<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; CHARACTER_ENCODING ATTRS &lt;Attribute Name&gt;=&quot;&lt;Encoding&gt;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>format<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; FORMAT ATTR &lt;Attribute Name&gt;=&quot;&lt;Content Type&gt;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>label<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; LABEL &lt;ISO-639 country code&gt; ATTRS &lt;Attribute Name&gt;=&quot;&lt;Localized Label&gt;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>meta<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; META &lt;2-chars country code&gt;</span>
<span class="line">PROPS</span>
<span class="line">  description=&quot;&lt;OCA Bundle description&gt;&quot;</span>
<span class="line">  name=&quot;&lt;Meaningful name of the Bundle&gt;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>cardinality<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; CARDINALITY ATTRS &lt;Attribute Name&gt;=&quot;&lt;X-Y&gt;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>conformance<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; CONFORMANCE ATTRS &lt;Attribute Name&gt;=&quot;&lt;M|O&gt;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>The default value is <code>O</code>.</li><li>entry-code<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; ENTRY_CODE ATTRS &lt;Attribute Name&gt;=[&quot;Option 1&quot;, &quot;Option 2&quot;, &quot;Option N&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>entry<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; ENTRY &lt;ISO-639 country code&gt; ATTRS &lt;Attribute Name&gt;={&quot;Option 1&quot;: &quot;Localized Label 1&quot;, &quot;Option 2&quot;: &quot;Localized Label 2&quot;, &quot;Option N&quot;: &quot;Localized Label N&quot;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>unit<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Operation&gt; UNIT &lt;metric system&gt; ATTRS &lt;Attribute Name&gt;=&quot;&lt;Unit&gt;&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h4 id="available-attribute-types" tabindex="-1"><a class="header-anchor" href="#available-attribute-types"><span>Available attribute types</span></a></h4><h5 id="primitive-types" tabindex="-1"><a class="header-anchor" href="#primitive-types"><span>Primitive types</span></a></h5><ul><li><code>Binary</code></li><li><code>Boolean</code></li><li><code>DateTime</code></li><li><code>Numeric</code></li><li><code>Text</code></li></ul><h5 id="collection-types" tabindex="-1"><a class="header-anchor" href="#collection-types"><span>Collection types</span></a></h5><p>Collection types allow for the definition of arrays of elements. The following collection types are available:</p><ul><li><code>Array[&lt;Collection type&gt; | &lt;Primitive type&gt; | &lt;Reference&gt;]</code></li></ul><h5 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h5><p>References are used to refer to other OCA objects. The following reference types are available:</p><ul><li><code>refn</code> refers to a named reference. It MUST start with the <code>refn</code> prefix: <code>refn:&lt;human readable reference name&gt;</code>. <code>refn</code> MUST point to a named reference defined in the <code>name</code> directive.</li><li><code>refs</code> refers to a SAID-based reference. It MUST start with the <code>refs</code> prefix: <code>refs:&lt;OCA object SAID&gt;</code>.</li></ul>`,46),l=[s];function r(o,c){return a(),t("div",null,l)}const p=e(n,[["render",r],["__file","ocafile.html.vue"]]),h=JSON.parse('{"path":"/specification/ocafile.html","title":"OCAFile Technical Specification","lang":"en-US","frontmatter":{"sidebarDepth":5,"description":"OCAFile specification"},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Purpose","slug":"purpose","link":"#purpose","children":[]},{"level":2,"title":"Main characteristics","slug":"main-characteristics","link":"#main-characteristics","children":[{"level":3,"title":"Deterministic through layered architecture","slug":"deterministic-through-layered-architecture","link":"#deterministic-through-layered-architecture","children":[]},{"level":3,"title":"Text based format","slug":"text-based-format","link":"#text-based-format","children":[]},{"level":3,"title":"Pleasant DSL","slug":"pleasant-dsl","link":"#pleasant-dsl","children":[]},{"level":3,"title":"Version control system compliant","slug":"version-control-system-compliant","link":"#version-control-system-compliant","children":[]}]},{"level":2,"title":"OCAfile DSL","slug":"ocafile-dsl","link":"#ocafile-dsl","children":[{"level":3,"title":"Preprocessor directives","slug":"preprocessor-directives","link":"#preprocessor-directives","children":[]},{"level":3,"title":"Meta directives","slug":"meta-directives","link":"#meta-directives","children":[]},{"level":3,"title":"Commands","slug":"commands","link":"#commands","children":[]}]}],"git":{"updatedTime":1721159664000},"filePathRelative":"specification/ocafile.md"}');export{p as comp,h as data};
