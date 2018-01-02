<link rel="stylesheet" href="{{ site.baseurl }}/css/docs.css">
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
<div class="title">{{ site.title | default: site.github.repository_name }}</div>
<div class="description">{{ site.description | default: site.github.project_tagline }}</div>
<div class="section">

  <a href="{{ site.github.repository_url }}" class="btn btn-appflow">View on GitHub</a>
<div class="btn btn-appflow">AppFlow Sandbox</div>
<div class="btn btn-appflow"><i class="fa fa-home"><span class="fr">Home</span></i></div>
</div>
<div class="wrapper"> 
<div class="section app-tray app-size-auto">
  <div class="app" id="GettingStarted">
    <div class="app-header app-icon"><i class="fa fa-book"></i></div>
    <div class="app-content">
    <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
    <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">Getting Started</div>
    <div class="col-xs-2 col-sm-1"></div>
    <div class="col-xs-12">
      <pre>
<code>&lt;div class=&quot;app-tray&quot; id=&quot;MyTray&quot;&gt;</code>
 <code> &lt;div class=&quot;app&quot;&gt;</code>
    <code>&lt;div class=&quot;app-header&quot;&gt;&lt;/div&gt;</code>
    <code>&lt;div class=&quot;app-content&quot;&gt;&lt;/div&gt;</code>
    <code>&lt;div class=&quot;app-title&quot;&gt;&lt;/div&gt;</code>
  <code>&lt;/div&gt;</code>
<code>&lt;/div&gt;</code>
</pre>  
    </div>
      <div class="col-xs-12">
        <div class="btn btn-appflow pull-right" data-toggle-app="#TrayConfigs">Tray Configs <i class="fa fa-arrow-circle-right"></i></div>
      </div>
    </div>
    <div class="app-title">Getting Started</div>
  </div>
  
  <div class="app" id="TrayConfigs">
    <div class="app-header app-icon"><i class="fa fa-cog"></i></div>
    <div class="app-content">
    <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
    <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">Tray Configs</div>
    <div class="col-xs-2 col-sm-1"></div>
    <div class="col-xs-12"></div>
      <div class="col-xs-12">
        <div class="btn btn-appflow pull-left" data-toggle-app="#GettingStarted"><i class="fa fa-arrow-circle-left"></i> Getting Started              </div>
        <div class="btn btn-appflow pull-right" data-toggle-app="#AppConfigs">App Configs <i class="fa fa-arrow-circle-right"></i>             </div>
    </div>
    <div class="app-title">Tray Configs</div>
  </div>
  
  <div class="app" id="AppConfigs">
    <div class="app-header app-icon"><span>
  <i class="fa fa-square"></i>
  <i class="fa fa-cogs fa-stack-0-5x fa-inverse-custom"></i>
</span></div>
    <div class="app-content">
    <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
    <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">App Configs</div>
    <div class="col-xs-2 col-sm-1"></div>
    <div class="col-xs-12"></div>
      <div class="col-xs-12">
        <div class="btn btn-appflow pull-left" data-toggle-app="#TrayConfigs"><i class="fa fa-arrow-circle-left"></i> Tray Configs              </div>
        <div class="btn btn-appflow pull-right" data-toggle-app="#JavaScript">JavaScript <i class="fa fa-arrow-circle-right"></i>             </div>
      </div>
    </div>
    <div class="app-title">App Configs</div>
  </div>
  
  <div class="app" id="JavaScript">
    <div class="app-header app-icon"><i class="f-mfizz icon-javascript"></i></div>
    <div class="app-content">
    <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
    <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">JavaScript</div>
    <div class="col-xs-2 col-sm-1"></div>
    <div class="col-xs-12"></div>
      <div class="col-xs-12">
        <div class="btn btn-appflow pull-left" data-toggle-app="#AppConfigs"><i class="fa fa-arrow-circle-left"></i> App Configs              </div>
        <div class="btn btn-appflow pull-right" data-toggle-app="#Helpers">Helpers <i class="fa fa-arrow-circle-right"></i>             </div>
      </div>
    </div>
    <div class="app-title">JavaScript</div>
  </div>
  
  <div class="app" id="Helpers">
    <div class="app-header app-icon"><i class="f-mfizz icon-css3"></i></div>
    <div class="app-content">
    <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
    <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">Helpers</div>
    <div class="col-xs-2 col-sm-1"></div>
    <div class="col-xs-12"></div>
      <div class="col-xs-12">
        <div class="btn btn-appflow pull-left" data-toggle-app="#JavaScript"><i class="fa fa-arrow-circle-left"></i> JavaScript              </div>
        <div class="btn btn-appflow pull-right" data-toggle-app="#Advanced">Advanced <i class="fa fa-arrow-circle-right"></i>             </div>
      </div>
    </div>
    <div class="app-title">Helpers</div>
  </div>
  
  <div class="app" id="Advanced">
    <div class="app-header app-icon"><i class="fa fa-cogs"></i></div>
    <div class="app-content">
    <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
    <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">Advanced</div>
    <div class="col-xs-2 col-sm-1"></div>
    <div class="col-xs-12"></div>
      <div class="col-xs-12">
        <div class="btn btn-appflow pull-left" data-toggle-app="#Helpers"><i class="fa fa-arrow-circle-left"></i> Helpers              </div>
        <div class="btn btn-appflow pull-right" data-toggle-app="#FAQs">FAQs <i class="fa fa-arrow-circle-right"></i>             </div>
      </div>
    </div>
    <div class="app-title">Advanced</div>
  </div>
  
  <div class="app" id="FAQs">
    <div class="app-header app-icon"><i class="fa fa-question-circle"></i></div>
    <div class="app-content">
    <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
    <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">Faqs</div>
    <div class="col-xs-2 col-sm-1"></div>
    <div class="col-xs-12"></div>
      <div class="col-xs-12">
        <div class="btn btn-appflow pull-left" data-toggle-app="#Advanced"><i class="fa fa-arrow-circle-left"></i> Advanced              </div>
      </div>
    </div>
    <div class="app-title">Faqs</div>
  </div>
  
</div>

</div>
