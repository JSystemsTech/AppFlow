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
   <a class="btn btn-appflow" href="{{ site.baseurl }}/playground">Playground</a>
   <a class="btn btn-appflow" href="{{ site.baseurl }}/index"><i class="fa fa-home"><span class="fr">Home</span></i></a>
</div>
<div class="tray-wrapper auto-resize col-xs-12 p-0">
   <div class="section app-tray app-size-auto">
      <div class="app" id="GettingStarted">
         <div class="app-header app-icon"><i class="fa fa-book"></i></div>
         <div class="app-content">
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">Getting Started</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#TrayConfigs">Tray Configs <i class="fa fa-arrow-circle-right"></i></a>
            </div>
            <div class="col-xs-12 text-left">
               <h2 class="fs-auto-h6">Requirements</h2>
               <p class="fs-auto-md text-color-light">AppFlow only requires <a href="http://jquery.com/download/" target="_blank" class="text-color-alt">Jquery 1.11.3</a> or above to run however the following libraries are recommened to really take advantage of AppFlows capabilities</p>

               <ul class="fs-auto-md">
                  <li><a href="https://getbootstrap.com/" target="_blank" class="text-color-alt"><strong>Bootstrap</strong></a></li>
                  <li><a href="http://fontawesome.io/" target="_blank" class="text-color-alt"><strong>FontAwesome</strong></a></li>
               </ul>

               <h2 class="fs-auto-h6">Let's Get Started</h2>
               <p class="fs-auto-md text-color-light">To set up the basic layout you only need 2 main components</p>
               
               <ul class="fs-auto-md">
                  <li><a href="#GettingStartedTray" class="text-color-alt"><strong>Tray</strong></a></li>
                  <li><a href="#GettingStartedApp" class="text-color-alt"><strong>App</strong></a></li>
               </ul>

               <div id="GettingStartedTray"></div>
               <h2 class="fs-auto-h6">Tray</h2>
               <p class="fs-auto-md text-color-light">The Tray is the container of all the App elements. To begin a new tray simply add the following code to your HTML:</p>
               <pre>
                  <code>&lt;div class=&quot;app-tray&quot; id=&quot;MyTray&quot;&gt;</code>
                  <code>&lt;/div&gt;</code>
               </pre>
               <a href="#" class="btn btn-appflow-alt" data-toggle-app="#TrayConfigs">More about Tray Configuration</a>

               <div id="GettingStartedApp"></div>
               <h2 class="fs-auto-h6">App</h2>
               <p class="fs-auto-md text-color-light">The App is the component that toggles the content shown in the Tray. Clicking or tapping on an App element expands the App element and shows the desired content. The App element has three distinct child elements:</p>
               <ul class="fs-auto-md">
                  <li><strong>Header</strong>: The section visible when the app is collpsed/closed</li>
                  <li><strong>Content</strong>: The section visible when the app is expanded/open</li>
                  <li><strong>Title</strong>: The section visible when the app is collpsed/closed that shows text only</li>
               </ul>
               <p class="fs-auto-md text-color-light"><strong>Note</strong>: The App element layout and style is built around using these 3 child elements only. It is highly recommended that custom and complex layouts for the title be moved to the header element.</p>
               <a href="#" class="btn btn-appflow-alt" data-toggle-app="#AppConfigs">More about App Configuration</a>
               <p class="fs-auto-md text-color-light">To begin a new app simply add an app element to your tray like the following:</p>
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
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#TrayConfigs">Tray Configs <i class="fa fa-arrow-circle-right"></i></a>
            </div>
         </div>
         <div class="app-title">Getting Started</div>
      </div>
      <div class="app" id="TrayConfigs">
         <div class="app-header app-icon"><i class="fa fa-cog"></i></div>
         <div class="app-content">
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">Tray Configs</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#GettingStarted"><i class="fa fa-arrow-circle-left"></i> Getting Started              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#AppConfigs">App Configs <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
            <div class="col-xs-12 text-left">
               <h2 class="fs-auto-h6">App Size</h2>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">Options</h2>
                  <p class="fs-auto-md text-color-light">You can control the overall size of the App elements when they are collapsed in the tray by adding any one of the following classes to the Tray element: </p>
                  <ul class="fs-auto-md">
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
                     <h2 class="fs-auto-xl">Auto resize Options</h2>
                     <p class="fs-auto-md text-color-light">This option is by far what really makes AppFlow really mobile friendly. Like the Bootstrap Grid System this option allows the mobile device or browser dictate the overall size of the App elements. Unlike the Bootstrap Grid System AppFlow accounts for smaller screen sizes better.</p>
                     <p class="fs-auto-md text-color-light">To use this option simply add the class "app-size-auto" to the Tray element.</p>
                     <p class="fs-auto-md text-color-light">So what if you want to keep the auto resize option but limit how small the App elements are? Not a problem. Replace "app-size-auto" with any one of the following classes to the Tray element:</p>
                     <ul class="fs-auto-md">
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
                     <h2 class="fs-auto-h6">App Spacing</h2>
                     <p class="fs-auto-md text-color-light">By default the App elements when collapsed have a margin of 10px but should you need to increase that margin value here are some classes to add the the Tray element:</p>
                     <ul class="fs-auto-md">
                      <li><strong>Spacing 1 (margin 10px)</strong>: add "spacing-1" <i>This is the implied default value if a spacing class is not applied to the tray</i></li>
                        <li><strong>Spacing 2 (margin 15px)</strong>: add "spacing-2"</li>
                        <li><strong>Spacing 3 (margin 20px)</strong>: add "spacing-3"</li>
                        <li><strong>Spacing 4 (margin 25px)</strong>: add "spacing-4"</li>
                        <li><strong>Spacing 5 (margin 30px)</strong>: add "app-size-auto-5"</li>
                     </ul>
                  </div>
                  <h2 class="fs-auto-h6">Open App Container</h2>
                  <div class="col-xs-12">
                     <h2 class="fs-auto-xl">Container Size</h2>
                     <p class="fs-auto-md text-color-light">By default the App elements when expaned use 100% of the space available in the tray but should you want to only use a portion of the space you can add a "app-open-{percent size}" class to the tray where the percent size ranges from 50 to 99. The expanded App element is centered in the tray element. <i>For reference this is similar to a Bootstrap Modal only contained within the Tray element.</i></p>
                     <h2 class="fs-auto-xl">Blured Background</h2>
                     <p class="fs-auto-md text-color-light">Assuming "app-open-{percent size}" is applied to the Tray Element, you can also choose to lighten or darken the Tray background behind the expanded App element by adding the following classes to the Tray element:</p>
                     <ul class="fs-auto-md">
                        <li><strong>Light Blur</strong>: add "blured" <i>Useful when the tray has a dark background</i></li>
                        <li><strong>Dark Blur</strong>: add "blured blured-dark" <i>Useful when the tray has a light background</i></li>
                     </ul>
                     <h2 class="fs-auto-xl">Open App Container Shadow</h2>
                     <p class="fs-auto-md text-color-light">Assuming "app-open-{percent size}" is applied to the Tray Element, you can also choose to add a shadow effect to the expanded App element to make it "pop out" more. Simply add "app-shadowed" to the Tray element</p>
               </div>
            </div>
            <div class="col-xs-12 footer">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#GettingStarted"><i class="fa fa-arrow-circle-left"></i> Getting Started              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#AppConfigs">App Configs <i class="fa fa-arrow-circle-right"></i>             </a>
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
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">App Configs</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#TrayConfigs"><i class="fa fa-arrow-circle-left"></i> Tray Configs              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#JavaScript">JavaScript <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
            <div class="col-xs-12 text-left">
               <h2 class="fs-auto-h6">Relative App Width And Hight</h2>
               <p class="fs-auto-md text-color-light">While the overall size of collapsed App elements are controlled by classes applied to the Tray element there may be the need to make individual App elements bigger than the default. That is where App Span  and App Height Span setting come into play</p>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Span</h2>
                  <p class="fs-auto-md text-color-light">This option controls the width of App element relative to the overall App Size and spacing options set in the Tray. Add any one of the following classes to an App element:</p>
                  <ul>
                        <li><strong>App Span 2 </strong>: add "app-span-2" (Collapsed app spans width of 2 App elements)</li>
                        <li><strong>App Span 3 </strong>: add "app-span-3" (Collapsed app spans width of 3 App elements)</li>
                        <li><strong>App Span 4 </strong>: add "app-span-4" (Collapsed app spans width of 4 App elements)</li>
                        <li><strong>App Span 5 </strong>: add "app-span-5" (Collapsed app spans width of 5 App elements)</li>
                     </ul>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Height Span</h2>
                  <p class="fs-auto-md text-color-light">This option controls the height of App element relative to the overall App Size and spacing options set in the Tray. Add any one of the following classes to an App element:</p>
                  <ul>
                        <li><strong>App Height Span 2 </strong>: add "app-height-span-2" (Collapsed app spans height of 2 App elements)</li>
                        <li><strong>App Height Span 3 </strong>: add "app-height-span-3" (Collapsed app spans height of 3 App elements)</li>
                        <li><strong>App Height Span 4 </strong>: add "app-height-span-4" (Collapsed app spans height of 4 App elements)</li>
                        <li><strong>App Height Span 5 </strong>: add "app-height-span-5" (Collapsed app spans height of 5 App elements)</li>
                     </ul>
               </div>
               <h2 class="fs-auto-h6">Alternate Styling for Collapsed Apps</h2>
               <p class="fs-auto-md text-color-light">By default a collapsed App element is flat with rounded corners. AppFlows provides some alternate options for displaying collapsed apps. Add any of the following classes to an App element:</p>
               <ul>
                        <li><strong>Square Corners </strong>: add "app-square" </li>
                        <li><strong>Glossy/Glass Effect </strong>: add "glass" </li>
                        <li><strong>Beveled border Effect </strong>: add "beveled" </li>
                     </ul>
               <h2 class="fs-auto-h6">Using Icons in the Header</h2>
               <p class="fs-auto-md text-color-light">If you are using a icon font libray such as FontAwesome and you are using icons in the Header element of an App element you can add an "app-icon" class to the Header element to let the the icon size to scale with the App Size Tray option</p>
               <p class="fs-auto-md text-color-light">Also if you are using the "app-icon" class you can add an additional class for controlling the relative size of the icon by adding any one of the following classes to the App Header element:</p>
               <ul>
                        <li><strong>App Icon Extra Small </strong>: add "app-icon-xs" smallest icon</li>
                        <li><strong>App Icon Small </strong>: add "app-icon-sm" small icon</li>
                        <li><strong>App Icon Medium </strong>: add "app-icon-md" medium icon. <i>This is the implied default value if an app-icon-{size} class is not applied to the App Header element</i></li>
                        <li><strong>App Icon Large </strong>: add "app-icon-lg" large icon</li>
                        <li><strong>App Icon Extra large </strong>: add "app-icon-xl" largest icon</li>
                        
                     </ul>
            </div>
            <div class="col-xs-12 footer">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#TrayConfigs"><i class="fa fa-arrow-circle-left"></i> Tray Configs              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#JavaScript">JavaScript <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
         </div>
         <div class="app-title">App Configs</div>
      </div>
      <div class="app" id="JavaScript">
         <div class="app-header app-icon"><i class="f-mfizz icon-javascript"></i></div>
         <div class="app-content">
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">JavaScript</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#AppConfigs"><i class="fa fa-arrow-circle-left"></i> App Configs              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#Helpers">Helpers <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
            <div class="col-xs-12 text-left">
            <p class="fs-auto-md text-color-light">AppFlow does not have a function to call to initialize the component like most Jquery function extensions, however there are events fired and methods to call on App elements available.</p>
               <h2 class="fs-auto-h6">Events</h2>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Open</h2>
                  <p class="fs-auto-md text-color-light">Fires once the App element is expanding</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-open', function(targetElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-open' method */</code>
                     <code>});</code>
                  </pre>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Opened</h2>
                  <p class="fs-auto-md text-color-light">Fires once the App element is fully expanded</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-opened', function(targetElement, openedAppElement, trayElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-open' or 'app-toggle' method */</code>
                     <code>});</code>
                  </pre>
               </div>

               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Close</h2>
                  <p class="fs-auto-md text-color-light">Fires once the App element is collapsing</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-close', function(targetElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-close' method */</code>
                     <code>});</code>
                  </pre>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Closed</h2>
                  <p class="fs-auto-md text-color-light">Fires once the App element is fully collapsed</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-closed', function(targetElement, closedAppElement, trayElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>/* 'options' variable passed only via manual trigger of 'app-close' or 'app-toggle' methods */</code>
                     <code>});</code>
                  </pre>
               </div>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Toggle</h2>
                  <p class="fs-auto-md text-color-light">Fires when the 'app-toggle' method is triggered.</p>
                  <pre>
                     <code>$('#MyAppElement').on('app-toggle', function(targetElement, toggledAppElement, trayElement, options){</code>
                     <code>/* handle Event */</code>
                     <code>});</code>
                  </pre>
               </div>


               <h2 class="fs-auto-h6">Methods</h2>
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Open</h2>
                  <p class="fs-auto-md text-color-light">Open an App element</p>
                  <pre>
                     <code>$('#MyAppElement').trigger('app-open', options);</code>
                  </pre>
               </div>
               
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Close</h2>
                  <p class="fs-auto-md text-color-light">Close an App element</p>
                  <pre>
                     <code>$('#MyAppElement').trigger('app-close', options);</code>
                  </pre>
               </div>
               
               <div class="col-xs-12">
                  <h2 class="fs-auto-xl">App Toggle</h2>
                  <p class="fs-auto-md text-color-light">Toggle the open / close state of an App element</p>
                  <pre>
                     <code>$('#MyAppElement').trigger('app-toggle', options);</code>
                  </pre>
               </div>
            </div>
            <div class="col-xs-12 footer">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#AppConfigs"><i class="fa fa-arrow-circle-left"></i> App Configs              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#Helpers">Helpers <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
         </div>
         <div class="app-title">JavaScript</div>
      </div>
      <div class="app" id="Helpers">
         <div class="app-header app-icon"><i class="f-mfizz icon-css3"></i></div>
         <div class="app-content">
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">Helpers</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#JavaScript"><i class="fa fa-arrow-circle-left"></i> JavaScript              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#Advanced">Advanced <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
            <div class="col-xs-12 text-left">
               <p class="fs-auto-md text-color-light">JavaScript Methods and Events provide intricate means of opening and closing an App element with additional options, but sometimes all that needs to be done is a simply open or close an App. AppFlow provides built-in helpers that handle just that.</p>
               
                  <h2 class="fs-auto-h6">Closing the current App from within the Content</h2>
                  <p class="fs-auto-md text-color-light">If you want to close the current open app with a button or other element in the App Content Element simply just add an "app-close" class to your button. AppFlow will listen for a click on the button and handle closing the App Element for you, no need to create a listener and fire a 'app-close'  event.</p>
               
                  <h2 class="fs-auto-h6">Closing Tray Apps Globally</h2>
                  <p class="fs-auto-md text-color-light">If you want to close the current open App element in a given tray from anywhere in the DOM then add a "data-close-tray-apps" attribute to a DOM element and set the value as the selector for the Tray element</p>

                  <pre>
                  <code>&lt;button data-close-tray-apps=&quot;#MyTray&quot;&gt; Close My Tray Apps &lt;/button&gt;</code>
                  </pre>
               
                  <h2 class="fs-auto-h6">Toggling App Globally</h2>
                  <p class="fs-auto-md text-color-light">If you want to toggle an App element in a given tray from anywhere in the DOM then add a "data-toggle-app" attribute to a DOM element and set the value as the selector for the App element</p>

                  <pre>
                  <code>&lt;button data-toggle-app=&quot;#MyAppElement&quot;&gt; Toggle My App &lt;/button&gt;</code>
                  </pre>
                  <p class="fs-auto-md text-color-light">This differs from using a "data-close-tray-apps" arribute in that this targets an App Element instead of a Tray Element and can open or close an app</p>
                  <p class="fs-auto-md text-color-light">If you wish to open an App in the same tray from within another App use this option as it will inherentlly close the open App and open the target App. <i>(See the example below)</i></p>

                  <pre>
                  <code>   &lt;div id=&quot;MyAppElement&quot; class=&quot;app&quot;&gt;</code>
                  <code>      &lt;div class=&quot;app-header&quot;&gt;Your header content&lt;/div&gt;</code>
                  <code>      &lt;div class=&quot;app-content&quot;&gt;</code>
                  <code>         &lt;button data-toggle-app=&quot;#MyOtherAppElement&quot;&gt; Open My Other App &lt;/button&gt;</code>
                  <code>      &lt;/div&gt;</code>
                  <code>      &lt;div class=&quot;app-title&quot;&gt;Your App Title Text&lt;/div&gt;</code>
                  <code>   &lt;/div&gt;</code>
               </pre>

               <h2 class="fs-auto-h6">Auto Size Text</h2>
                  <p class="fs-auto-md text-color-light">If you need to adjust the size of text based on the screen size AppFlow provides a styling option that will help you with that. Add any one of the following classes will automatically scale the text with the screen size <i>(Shown in order from smallest to largest)</i>:</p>

                     <ul>
                        <li><strong>Extra Small Text </strong>: add "fs-auto-xs" </li>
                        <li><strong>Small Text </strong>: add "fs-auto-sm" </li>
                        <li><strong>Medium Text </strong>: add "fs-auto-md"  </li>
                        <li><strong>Large Text </strong>: add "fs-auto-lg" </li>
                        <li><strong>Extra Large Text </strong>: add "fs-auto-xl" </li>
                        <li><strong>Header 6 Text </strong>: add "fs-auto-h6" </li>
                        <li><strong>Header 5 Text </strong>: add "fs-auto-h5" </li>
                        <li><strong>Header 4 Text </strong>: add "fs-auto-h4" </li>
                        <li><strong>Header 3 Text </strong>: add "fs-auto-h3" </li>
                        <li><strong>Header 2 Text </strong>: add "fs-auto-h2" </li>
                        <li><strong>Header 1 Text </strong>: add "fs-auto-h1" </li>
                     </ul>



            </div>
            <div class="col-xs-12 footer">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#JavaScript"><i class="fa fa-arrow-circle-left"></i> JavaScript              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#Advanced">Advanced <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
         </div>
         <div class="app-title">Helpers</div>
      </div>
      <div class="app" id="Advanced">
         <div class="app-header app-icon"><i class="fa fa-cogs"></i></div>
         <div class="app-content">
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">Advanced</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#Helpers"><i class="fa fa-arrow-circle-left"></i> Helpers              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#FAQs">FAQs <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
            <div class="col-xs-12 text-left">
               <h2 class="fs-auto-h6">Nested Trays</h2>
               <p class="fs-auto-md text-color-light">If you want to group App elements together you can do so by creating a new Tray Element inside an App Content element and populate the Tray with other App elements.</p>
               <p class="fs-auto-md text-color-light">There are a few things to be aware of though.</p>
               <p class="fs-auto-md text-color-light">First 'app-close' class elements always search for the nearest tray to close App elements, so if you have a 'app-close' class element defined in the Sub Tray App it will only close the App element in the Sub Tray and not the Main Tray App</p>
               <p class="fs-auto-md text-color-light">Secondly if the Sub Tray has an open App element and the Main tray closes it's App elements, the Sub Tray App remains in a open state even though it is not displayed and will show again when The Main tray App is opened again. If you wish to make sure that the Sub Tray App Closes you can add an 'app-close', 'app-closed', or 'app-toggle' event listener on the Main Tray App and trigged an 'app-close' event on the Sub Tray App. Or if you have an 'app-close' class element on the Main Tray App you can add a "data-close-tray-apps" attribute that targets the Sub Tray</p>
               <p class="fs-auto-md text-color-light">In short be aware that eventing with nested trays can be complex so be sure to debug your code carefully. Also keep in mind that AppFlow is intended to be mobile friendly so best practice is to keep nested Trays to a minimum and it is not recommended to have more than one layer of nested Tray elements</p>

               <h2 class="fs-auto-h6">Fixed Height Trays</h2>
               <p class="fs-auto-md text-color-light">If you need to make the Tray a fixed height you will have to do this ba adding an outer &lt;div&gt; wrapper and append the height seeting to that element. Also if you have a background for the tray move those styling settings to the wrapper &lt;div&gt;. This is to prevent a display issue with the App elements inside the tray.</p>

               <h2 class="fs-auto-h6">Full Height Trays</h2>
               <p class="fs-auto-md text-color-light">In many cases it is ofter desired to have the Tray span the remaining height of the DOM (like this page is doing). However because of the complex CSS styling of the Tray and App elements it is not a simple as adding a 100% height style to the tray. Luckily AppFlow privides a way to accomplish this. all you have to do is add a wrapper element around the Tray element with an 'auto-resize' class and let AppFlow take care of the rest. This is only needed for the outermost Tray element</p>
               <pre>
                  <code>&lt;div class=&quot;auto-resize&quot;&gt;</code>
                  <code>   &lt;div class=&quot;app-tray&quot; id=&quot;MyTray&quot;&gt;</code>
                  <code>      &lt;div class=&quot;app&quot;&gt;</code>
                  <code>         &lt;div class=&quot;app-header&quot;&gt;Your header content&lt;/div&gt;</code>
                  <code>         &lt;div class=&quot;app-content&quot;&gt;Your app content goes here&lt;/div&gt;</code>
                  <code>         &lt;div class=&quot;app-title&quot;&gt;Your App Title Text&lt;/div&gt;</code>
                  <code>      &lt;/div&gt;</code>
                  <code>   &lt;/div&gt;</code>
                  <code>&lt;/div&gt;</code>
               </pre>
               <h2 class="fs-auto-h6">Open vs Closed App Backgrounds</h2>
               <p class="fs-auto-md text-color-light">Need to have separate backgrounds for an App element's open/closed state? you might be tempted to add a separate class to an App Content element, which is a quick option. However to take advantage of a smoother transition between states it is recomended to create a class in your stylesheet like the following and apply it to the App element</p>
               <pre>
                  <code>.my-app-custom-background-class {</code>
                  <code>   /*place closed App background CSS */</code>
                  <code>}</code>
                  <code>.my-app-custom-background-class.active {</code>
                  <code>   /*place open App background CSS */</code>
                  <code>}</code>
               </pre>
               <pre>
                  <code>&lt;div class=&quot;app-tray&quot; id=&quot;MyTray&quot;&gt;</code>
                  <code>   &lt;div class=&quot;app my-app-custom-background-class&quot;&gt;</code>
                  <code>      &lt;div class=&quot;app-header&quot;&gt;Your header content&lt;/div&gt;</code>
                  <code>      &lt;div class=&quot;app-content&quot;&gt;Your app content goes here&lt;/div&gt;</code>
                  <code>      &lt;div class=&quot;app-title&quot;&gt;Your App Title Text&lt;/div&gt;</code>
                  <code>   &lt;/div&gt;</code>
                  <code>&lt;/div&gt;</code>
               </pre>

            </div>
            <div class="col-xs-12 footer">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#Helpers"><i class="fa fa-arrow-circle-left"></i> Helpers              </a>
               <a href="#" class="btn btn-appflow pull-right" data-toggle-app="#FAQs">FAQs <i class="fa fa-arrow-circle-right"></i>             </a>
            </div>
         </div>
         <div class="app-title">Advanced</div>
      </div>
      <div class="app" id="FAQs">
         <div class="app-header app-icon">
            <i class="fa fa-question-circle"></i>
         </div>
         <div class="app-content">
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">FAQs</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#Advanced"><i class="fa fa-arrow-circle-left"></i> Advanced              </a>
            </div>
            <div class="col-xs-12"></div>
            <div class="col-xs-12 footer">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#Advanced"><i class="fa fa-arrow-circle-left"></i> Advanced              </a>
            </div>
         </div>
         <div class="app-title">FAQs</div>
      </div>


      <div class="app" id="More">
         <div class="app-header app-icon">
            <i class="fa fa-plus"></i>
         </div>
         <div class="app-content">
            <a href="#" class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0 text-color-primary"><i class="fa fa-chevron-left"></i><span class="fr">Back</span></a>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">More</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#FAQs"><i class="fa fa-arrow-circle-left"></i> FAQs              </a>
            </div> 
            <div class="col-xs-12 h-400 bg-animated-alt">
               
               <div class="app-tray app-size-auto">
                  <div  id="FancyApp1" class="app bg-animated-alt">
                     <div class="app-header app-icon">
                        <div id="IconCarousel" class="carousel slide" data-ride="carousel">
                        <div  class="carousel-inner">
                              <div class="item active">
                                 <i class="fa fa-cog"></i>
                              </div>

                              <div class="item">
                                 <i class="fa fa-home"></i>
                              </div>

                              <div class="item">
                                 <i class="fa fa-phone"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="app-content">
                        <div class="btn btn-appflow app-close">Close App</div>
                     </div>
                     <div class="app-title">
                        Sliding Icons
                     </div>
                  </div>
                  <div  id="FancyApp2" class="app bg-white">
                     <div class="app-header app-icon">
                        <i class="fa fa-spinner fa-spin color-animated"></i>
                     </div>
                     <div class="app-content">
                        <div class="btn btn-appflow app-close">Close App</div>
                     </div>
                     <div class="app-title">
                        Loading...
                     </div>
                  </div>
                  <div  id="FancyApp3" class="app bg-white">
                     <div class="app-alert"><span class="badge bg-animated fs-auto-lg">2</span></div>
                     <div class="app-header app-icon">
                        <i class="fa fa-exclamation-triangle color-animated"></i>
                     </div>
                     <div class="app-content">
                        <div class="btn btn-appflow app-close">Close App</div>
                     </div>
                     <div class="app-title">
                        App &amp; Alert
                     </div>
                  </div>
               </div>


            </div>
            <div class="col-xs-12 footer">
               <a href="#" class="btn btn-appflow pull-left" data-toggle-app="#FAQs"><i class="fa fa-arrow-circle-left"></i> FAQs              </a>
            </div>
         </div>
         <div class="app-title">More</div>
      </div>
   </div>
</div>
