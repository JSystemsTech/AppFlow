<link rel="stylesheet" href="{{ site.baseurl }}/css/docs.css">
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
<script type="text/javascript" src="{{ site.baseurl }}/docs.js"></script>
<div class="col-xs-12 col-md-3 p-0">
   <div class="col-xs-12 fr fs-auto-h6">{{ site.title | default: site.github.repository_name }}</div>
   <div class="col-xs-12 fr fs-auto-xs text-color-light">{{ site.description | default: site.github.project_tagline }}</div>
</div>
<div class="col-xs-12 col-md-6">
   <div class="fr tc text-color-primary fs-auto-h2">DOCUMENTATION</div>
   <div class="fr tc text-color-primary fs-auto-lg">Guide for using this library</div>
</div>
<div class="col-xs-12 col-md-3"></div>
<div class="section col-xs-12 btn-row">
   <a href="{{ site.github.repository_url }}" class="btn btn-appflow">View on GitHub</a>
   <a class="btn btn-appflow" href="{{ site.baseurl }}/playground">Playground</a>
   <a class="btn btn-appflow" href="{{ site.baseurl }}/index"><i class="fa fa-home"><span class="fr">Home</span></i></a>
</div>
<div class="tray-wrapper auto-resize col-xs-12 p-0">
   <div class="section app-tray app-size-auto">
   {% include docsApp1 %}
   {% include docsApp2 %}
   {% include docsApp3 %}
   {% include docsApp4 %}
   {% include docsApp5 %}
   {% include docsApp6 %}
   {% include docsApp7 %}
   {% include docsApp8 %}     
   </div>
</div>
