<link rel="stylesheet" href="{{ site.baseurl }}/css/docs.css">
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
<script type="text/javascript" src="{{ site.baseurl }}/example.js"></script>
<div class="col-xs-12 col-md-3 p-0">
   <div class="col-xs-12 fr fs-auto-h6">{{ site.title | default: site.github.repository_name }}</div>
   <div class="col-xs-12 fr fs-auto-xs text-color-light">{{ site.description | default: site.github.project_tagline }}</div>
</div>
<div class="col-xs-12 col-md-6">
   <div class="fr tc text-color-primary fs-auto-h2">PLAYGROUND</div>
   <div class="fr tc text-color-primary fs-auto-lg">See how diferent configurations work</div>
</div>
<div class="col-xs-12 col-md-3"></div>
<div class="section col-xs-12 btn-row">
   <a href="{{ site.github.repository_url }}" class="btn btn-appflow">View on GitHub</a>
   <div class="btn btn-appflow">AppFlow Sandbox</div>
   <div class="btn btn-appflow"><i class="fa fa-home"><span class="fr">Home</span></i></div>
</div>



<form id="MyAppTrayControls" class="container">
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-3">
                <p><strong>App Spacing Settings</strong>
                </p>
                <div class="radio spacing-control">
                    <label>
                        <input type="radio" value="" name="spacing" checked>Default</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" value="spacing-1" name="spacing">Spacing 1</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" value="spacing-2" name="spacing">Spacing 2</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="spacing-3" name="spacing">Spacing 3</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="spacing-4" name="spacing">Spacing 4</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="spacing-5" name="spacing">Spacing 5</label>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3">
                <p><strong>App Size Settings</strong>
                </p>
                <div class="radio app-size-control">
                    <label>
                        <input type="radio" value="" name="app-size" checked>Default</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" value="app-size-1" name="app-size">App Size 1</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" value="app-size-2" name="app-size">App Size 2</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-3" name="app-size">App Size 3</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-4" name="app-size">App Size 4</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-5" name="app-size">App Size 5</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-6" name="app-size">App Size 6</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-7" name="app-size">App Size 7</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-8" name="app-size">App Size 8</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto" name="app-size">App Size Auto</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto-2" name="app-size">App Size Auto (min size 2)</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto-3" name="app-size">App Size Auto (min size 3)</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto-4" name="app-size">App Size Auto (min size 4)</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto-5" name="app-size">App Size Auto (min size 5)</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto-6" name="app-size">App Size Auto (min size 6)</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto-7" name="app-size">App Size Auto (min size 7)</label>
                </div>
                <div class="radio ">
                    <label>
                        <input type="radio" value="app-size-auto-8" name="app-size">App Size Auto (min size 8)</label>
                </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-3">
                <div class="form-group">
                    <label for="appOpenSelect">App Open Size Percent Select list:</label>
                    <select class="form-control" id="appOpenSelect">
                        <option value="">100</option>
                    </select>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="shadowed">Shadowed Open App Container (only for open apps set at 50-99%)</label>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-3">
                <p><strong>Tray Background Blur on Open App Settings</strong>
                </p>
                <div class="radio">
                    <label>
                        <input type="radio" value="" name="blured" checked>None (Default)</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" value="blured" name="blured">Light Blur</label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" value="blured blured-dark" name="blured">Dark Blur</label>
                </div>
            </div>

        </div>
    
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <p><strong>App Span Settings</strong>
                            </p>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="" name="app-span" checked>Default</label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="app-span-2" name="app-span">App Span 2</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-span-3" name="app-span">App Span 3</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-span-4" name="app-span">App Span 4</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-span-5" name="app-span">App Span 5</label>
                            </div>
                        </div>

                        <div class="col-xs-6  col-sm-6 col-md-3">
                            <p><strong>App Height Span Settings</strong>
                            </p>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="" name="app-height-span" checked>Default</label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="app-height-span-2" name="app-height-span">App Height Span 2</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-height-span-3" name="app-height-span">App Height Span 3</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-height-span-4" name="app-height-span">App Height Span 4</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-height-span-5" name="app-height-span">App Height Span 5</label>
                            </div>
                        </div>

                        <div class="col-xs-6  col-sm-6 col-md-3">
                            <p><strong>App Icon Size Settings</strong>
                            </p>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="" name="icon-size" checked>Default</label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="app-icon-xs" name="icon-size">Icon Size Xs</label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="app-icon-sm" name="icon-size">Icon Size Sm</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-icon-md" name="icon-size">Icon Size Md</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-icon-lg" name="icon-size">Icon Size Lg</label>
                            </div>
                            <div class="radio ">
                                <label>
                                    <input type="radio" value="app-icon-xl" name="icon-size">Icon Size Xl</label>
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <p><strong>Other App Settings</strong>
                            </p>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="glass">Glass Effect</label>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="square">Square Corners</label>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="beveled">Beveled border</label>
                            </div>
                        </div>
                    </div>
                </form>



<div class="tray-wrapper auto-resize col-xs-12 p-0">
   <div class="section app-tray" id="myAppTray">
      
      <div class="app" id="App1">
         <div class="app-header app-icon"><i class="fa fa-question-circle"></i></div>
         <div class="app-content">
            <div class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></div>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">App 1</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12 fs-auto-h5"> Testing App Content</div>
         </div>
         <div class="app-title">App 1</div>
      </div>

      <div class="app" id="App2">
         <div class="app-header app-icon"><i class="fa fa-question-circle"></i></div>
         <div class="app-content">
            <div class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></div>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">App 2</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12 fs-auto-h5"> Testing App Content</div>
         </div>
         <div class="app-title">App 2</div>
      </div>

      <div class="app" id="App3">
         <div class="app-header app-icon"><i class="fa fa-question-circle"></i></div>
         <div class="app-content">
            <div class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></div>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">App 3</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12 fs-auto-h5"> Testing App Content</div>
         </div>
         <div class="app-title">App 3</div>
      </div>

      <div class="app" id="App4">
         <div class="app-header app-icon"><i class="fa fa-question-circle"></i></div>
         <div class="app-content">
            <div class="col-xs-2 col-lg-1 app-close text-left fs-auto-xl pr-0"><i class="fa fa-chevron-left" style="
"></i><span class="fr">Back</span></div>
            <div class="col-xs-8 col-lg-10 fr fs-auto-h3 p-0">App 4</div>
            <div class="col-xs-2 col-lg-1"></div>
            <div class="col-xs-12 fs-auto-h5"> Testing App Content</div>
         </div>
         <div class="app-title">App 4</div>
      </div>
   </div>
</div>
