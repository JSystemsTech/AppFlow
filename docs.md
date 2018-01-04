<link rel="stylesheet" href="{{ site.baseurl }}/css/docs.css">
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
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
   <div class="btn btn-appflow">AppFlow Sandbox</div>
   <div class="btn btn-appflow"><i class="fa fa-home"><span class="fr">Home</span></i></div>
</div>
<div class="tray-wrapper auto-resize col-xs-12 p-0">
   <div class="section app-tray app-size-auto">
      <div class="app" id="GettingStarted">
         <div class="app-header app-icon"><i class="fa fa-book"></i></div>
         <div class="app-content">
            <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
            <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">Getting Started</div>
            <div class="col-xs-2 col-sm-1"></div>
            <div class="col-xs-12 text-left">
               <h2 class="fs-xl">Requirements</h2>
               <p class="fs-md text-color-light">AppFlow only requires <a href="http://jquery.com/download/" target="_blank" class="text-color-alt">Jquery 1.11.3</a> or above to run however the following libraries are recommened to really take advantage of AppFlows capabilities</p>

               <ul class="fs-md">
                  <li><a href="https://getbootstrap.com/" target="_blank" class="text-color-alt"><strong>Bootstrap</strong></a></li>
                  <li><a href="http://fontawesome.io/" target="_blank" class="text-color-alt"><strong>FontAwesome</strong></a></li>
               </ul>

               <h2 class="fs-xl">Let's Get Started</h2>
               <p class="fs-md text-color-light">To set up the basic layout you only need 2 main components</p>
               
               <ul class="fs-md">
                  <li><a href="#GettingStartedTray" class="text-color-alt"><strong>Tray</strong></a></li>
                  <li><a href="#GettingStartedApp" class="text-color-alt"><strong>App</strong></a></li>
               </ul>

               <div id="GettingStartedTray"></div>
               <h2 class="fs-xl">Tray</h2>
               <p class="fs-md text-color-light">The Tray is the container of all the App elements. To begin a new tray simply add the following code to your HTML:</p>
               <pre>
                  <code>&lt;div class=&quot;app-tray&quot; id=&quot;MyTray&quot;&gt;</code>
                  <code>&lt;/div&gt;</code>
               </pre>
               <div class="btn btn-appflow-alt" data-toggle-app="#TrayConfigs">More about Tray Configuration</div>

               <div id="GettingStartedApp"></div>
               <h2 class="fs-xl">App</h2>
               <p class="fs-md text-color-light">The App is the component that toggles the content shown in the Tray. Clicking or tapping on an App element expands the App element and shows the desired content. The App element has three distinct child elements:</p>
               <ul class="fs-md">
                  <li><strong>Header</strong>: The section visible when the app is collpsed/closed</li>
                  <li><strong>Content</strong>: The section visible when the app is expanded/open</li>
                  <li><strong>Title</strong>: The section visible when the app is collpsed/closed that shows text only</li>
               </ul>
               <p class="fs-md text-color-light"><strong>Note</strong>: The App element layout and style is built around using these 3 child elements only. It is highly recommended that custom and complex layouts for the title be moved to the header element.</p>
               <div class="btn btn-appflow-alt" data-toggle-app="#AppConfigs">More about App Configuration</div>
               <p class="fs-md text-color-light">To begin a new app simply add an app element to your tray like the following:</p>
               <pre>
                  <code>&lt;div class=&quot;app-tray&quot; id=&quot;MyTray&quot;&gt;</code>
                  <code>   &lt;div class=&quot;app&quot;&gt;</code>
                  <code>      &lt;div class=&quot;app-header&quot;&gt;Your header content&lt;/div&gt;</code>
                  <code>      &lt;div class=&quot;app-content&quot;&gt;Your app content goes here&lt;/div&gt;</code>
                  <code>      &lt;div class=&quot;app-title&quot;&gt;Your App Title Text&lt;/div&gt;</code>
                  <code>   &lt;/div&gt;</code>
                  <code>&lt;/div&gt;</code>
               </pre>
            </div>
            <div class="col-xs-12 footer">
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
            <div class="col-xs-12 text-left">
               <h2 class="fs-xl">App Size</h2>
               <div class="col-xs-12">
                  <h2 class="fs-lg">Options</h2>
                  <p class="fs-md text-color-light">You can control the overall size of the App elements when they are collapsed in the tray by adding any one of the following classes to the Tray element: </p>
                  <ul class="fs-md">
                     <li><strong>App Size 1 (25px)</strong>: add "app-size-1"</li>
                     <li><strong>App Size 2 (50px)</strong>: add "app-size-2"</li>
                     <li><strong>App Size 3 (75px)</strong>: add "app-size-3"</li>
                     <li><strong>App Size 4 (100px)</strong>: add "app-size-4" <i>This is the implied default value if an app size class is not applied to the tray</i></li>
                     <li><strong>App Size 5 (125px)</strong>: add "app-size-5"</li>
                     <li><strong>App Size 6 (150px)</strong>: add "app-size-6"</li>
                     <li><strong>App Size 7 (175px)</strong>: add "app-size-7"</li>
                     <li><strong>App Size 8 (200px)</strong>: add "app-size-8"</li>
                  
                  </ul>
               </div>
                  <div class="col-xs-12">
                     <h2 class="fs-lg">Auto resize Options</h2>
                     <p class="fs-md text-color-light">This option is by far what really makes AppFlow really mobile friendly. Like the Bootstrap Grid System this option allows the mobile device or browser dictate the overall size of the App elements. Unlike the Bootstrap Grid System AppFlow accounts for smaller screen sizes better.</p>
                     <p class="fs-md text-color-light">To use this option simply add the class "app-size-auto" to the Tray element.</p>
                     <p class="fs-md text-color-light">So what if you want to keep the auto resize option but limit how small the App elements are? Not a problem. Replace "app-size-auto" with any one of the following classes to the Tray element:</p>
                     <ul class="fs-md">
                        <li><strong>App Size Auto 2 (min 50px)</strong>: add "app-size-auto-2"</li>
                        <li><strong>App Size Auto 3 (min 75px)</strong>: add "app-size-auto-3"</li>
                        <li><strong>App Size Auto 4 (min 100px)</strong>: add "app-size-auto-4"</li>
                        <li><strong>App Size Auto 5 (min 125px)</strong>: add "app-size-auto-5"</li>
                        <li><strong>App Size Auto 6 (min 150px)</strong>: add "app-size-auto-6"</li>
                        <li><strong>App Size Auto 7 (min 175px)</strong>: add "app-size-auto-7"</li>
                        <li><strong>App Size Auto 8 (min 200px)</strong>: add "app-size-auto-8"</li>
                     </ul>
                  </div>
                  <div class="col-xs-12">
                     <h2 class="fs-xl">App Spacing</h2>
                     <p class="fs-md text-color-light">By default the App elements when collapsed have a margin of 10px but should you need to increase that margin value here are some classes to add the the Tray element:</p>
                     <ul class="fs-md">
                      <li><strong>Spacing 1 (margin 10px)</strong>: add "spacing-1" <i>This is the implied default value if a spacing class is not applied to the tray</i></li>
                        <li><strong>Spacing 2 (margin 15px)</strong>: add "spacing-2"</li>
                        <li><strong>Spacing 3 (margin 20px)</strong>: add "spacing-3"</li>
                        <li><strong>Spacing 4 (margin 25px)</strong>: add "spacing-4"</li>
                        <li><strong>Spacing 5 (margin 30px)</strong>: add "app-size-auto-5"</li>
                     </ul>
                  </div>
                  <h2 class="fs-xl">Open App Container</h2>
                  <div class="col-xs-12">
                     <h2 class="fs-lg">Container Size</h2>
                     <p class="fs-md text-color-light">By default the App elements when expaned use 100% of the space available in the tray but should you want to only use a portion of the space you can add a "app-open-{percent size}" class to the tray where the percent size ranges from 50 to 99. The expanded App element is centered in the tray element. <i>For reference this is similar to a Bootstrap Modal only contained within the Tray element.</i></p>
                     <h2 class="fs-lg">Blured Background</h2>
                     <p class="fs-md text-color-light">Assuming "app-open-{percent size}" is applied to the Tray Element, you can also choose to lighten or darken the Tray background behind the expanded App element by adding the following classes to the Tray element:</p>
                     <ul class="fs-md">
                        <li><strong>Light Blur</strong>: add "blured" <i>Useful when the tray has a dark background</i></li>
                        <li><strong>Dark Blur</strong>: add "blured blured-dark" <i>Useful when the tray has a light background</i></li>
                     </ul>
                     <h2 class="fs-lg">Open App Container Shadow</h2>
                     <p class="fs-md text-color-light">Assuming "app-open-{percent size}" is applied to the Tray Element, you can also choose to add a shadow effect to the expanded App element to make it "pop out" more. Simply add "app-shadowed" to the Tray element</p>
               </div>
            </div>
            <div class="col-xs-12 footer">
               <div class="btn btn-appflow pull-left" data-toggle-app="#GettingStarted"><i class="fa fa-arrow-circle-left"></i> Getting Started              </div>
               <div class="btn btn-appflow pull-right" data-toggle-app="#AppConfigs">App Configs <i class="fa fa-arrow-circle-right"></i>             </div>
            </div>
         </div>
         <div class="app-title">Tray Configs</div>
      </div>
      <div class="app" id="AppConfigs">
         <div class="app-header app-icon"><span>
            <i class="fa fa-square"></i>
            <i class="fa fa-cogs fa-stack-0-5x fa-inverse-custom"></i>
            </span>
         </div>
         <div class="app-content">
            <div class="col-xs-2 col-sm-1 app-close p-0"><i class="fa fa-chevron-left"><span class="fr">Back</span></i></div>
            <div class="col-xs-8 col-sm-10 fr fs-xxl p-0">App Configs</div>
            <div class="col-xs-2 col-sm-1"></div>
            <div class="col-xs-12 text-left">
               <h2 class="fs-xl">Relative App Width And Hight</h2>
               <p class="fs-md text-color-light">While the overall size of collapsed App elements are controlled by classes applied to the Tray element there may be the need to make individual App elements bigger than the default. That is where App Span  and App Height Span setting come into play</p>
               <div class="col-xs-12">
                  <h2 class="fs-lg">App Span</h2>
                  <p class="fs-md text-color-light">This option controls the width of App element relative to the overall App Size and spacing options set in the Tray. Add any one of the following classes to an App element:</p>
                  <ul>
                        <li><strong>App Span 2 </strong>: add "app-span-2" (Collapsed app spans width of 2 App elements)</li>
                        <li><strong>App Span 3 </strong>: add "app-span-3" (Collapsed app spans width of 3 App elements)</li>
                        <li><strong>App Span 4 </strong>: add "app-span-4" (Collapsed app spans width of 4 App elements)</li>
                        <li><strong>App Span 5 </strong>: add "app-span-5" (Collapsed app spans width of 5 App elements)</li>
                     </ul>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-lg">App Height Span</h2>
                  <p class="fs-md text-color-light">This option controls the height of App element relative to the overall App Size and spacing options set in the Tray. Add any one of the following classes to an App element:</p>
                  <ul>
                        <li><strong>App Height Span 2 </strong>: add "app-height-span-2" (Collapsed app spans height of 2 App elements)</li>
                        <li><strong>App Height Span 3 </strong>: add "app-height-span-3" (Collapsed app spans height of 3 App elements)</li>
                        <li><strong>App Height Span 4 </strong>: add "app-height-span-4" (Collapsed app spans height of 4 App elements)</li>
                        <li><strong>App Height Span 5 </strong>: add "app-height-span-5" (Collapsed app spans height of 5 App elements)</li>
                     </ul>
               </div>
               <h2 class="fs-xl">Alternate Styling for Collapsed Apps</h2>
               <p class="fs-md text-color-light">By default a collapsed App element is flat with rounded corners. AppFlows provides some alternate options for displaying collapsed apps. Add any of the following classes to an App element:</p>
               <ul>
                        <li><strong>Square Corners </strong>: add "app-square" </li>
                        <li><strong>Glossy/Glass Effect </strong>: add "glass" </li>
                        <li><strong>Beveled border Effect </strong>: add "beveled" </li>
                     </ul>
               <h2 class="fs-xl">Using Icons in the Header</h2>
               <p class="fs-md text-color-light">If you are using a icon font libray such as FontAwesome and you are using icons in the Header element of an App element you can add an "app-icon" class to the Header element to let the the icon size to scale with the App Size Tray option</p>
            </div>
            <div class="col-xs-12 footer">
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
            <div class="col-xs-12 text-left">
            <p class="fs-md text-color-light">AppFlow does not have a function to call to initialize the component like most Jquery function extensions, however there are events fired and methods to call on App elements available.</p>
               <h2 class="fs-xl">Events</h2>
               <div class="col-xs-12">
                  <h2 class="fs-xl">App Open</h2>
                  <p class="fs-md text-color-light">Fires once the App element is expanding</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-open', function(targetElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-open' method */</code>
                     <code>});</code>
                  </pre>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-xl">App Opened</h2>
                  <p class="fs-md text-color-light">Fires once the App element is fully expanded</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-opened', function(targetElement, openedAppElement, trayElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-open' or 'app-toggle' method */</code>
                     <code>});</code>
                  </pre>
               </div>

               <div class="col-xs-12">
                  <h2 class="fs-xl">App Close</h2>
                  <p class="fs-md text-color-light">Fires once the App element is collapsing</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-close', function(targetElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-close' method */</code>
                     <code>});</code>
                  </pre>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-xl">App Closed</h2>
                  <p class="fs-md text-color-light">Fires once the App element is fully collapsed</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-closed', function(targetElement, closedAppElement, trayElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-close' or 'app-toggle' methods */</code>
                     <code>});</code>
                  </pre>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-xl">App Toggle</h2>
                  <p class="fs-md text-color-light">Fires when the 'app-toggle' method is triggered.</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-toggle', function(targetElement, toggledAppElement, trayElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>});</code>
                  </pre>
               </div>


               <h2 class="fs-xl">Methods</h2>
               <div class="col-xs-12">
                  <h2 class="fs-xl">App Open</h2>
                  <p class="fs-md text-color-light">Open an App element</p>
                  <pre>
                     <code>$('#MyAppElement').trigger('app-open', options);</code>
                  </pre>
               </div>
               
               <div class="col-xs-12">
                  <h2 class="fs-xl">App Close</h2>
                  <p class="fs-md text-color-light">Close an App element</p>
                  <pre>
                     <code>$('#MyAppElement').trigger('app-close', options);</code>
                  </pre>
               </div>
               
               <div class="col-xs-12">
                  <h2 class="fs-xl">App Toggle</h2>
                  <p class="fs-md text-color-light">Toggle the open / close state of an App element</p>
                  <pre>
                     <code>$('#MyAppElement').trigger('app-toggle', options);</code>
                  </pre>
               </div>
            </div>
            <div class="col-xs-12 footer">
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
            <div class="col-xs-12 footer">
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
            <div class="col-xs-12 footer">
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
            <div class="col-xs-12 footer">
               <div class="btn btn-appflow pull-left" data-toggle-app="#Advanced"><i class="fa fa-arrow-circle-left"></i> Advanced              </div>
            </div>
         </div>
         <div class="app-title">Faqs</div>
      </div>
   </div>
</div>
