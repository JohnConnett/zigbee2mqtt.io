"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82434],{48230:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>i,data:()=>o});var s=n(6254);const t={},i=(0,n(32991).A)(t,[["render",function(e,a){return(0,s.uX)(),(0,s.CE)("div",null,a[0]||(a[0]=[(0,s.Fv)('<h1 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h1><blockquote><p>An ongoing discussion about this feature can be found in <a href="https://github.com/Koenkk/zigbee2mqtt/issues/2921" target="_blank" rel="noopener noreferrer">#2921</a></p></blockquote><p>This feature allows to update your Zigbee devices over-the-air.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Always check if the firmware update will bring you advantages. Firmware updates are NOT made for Zigbee2MQTT, but for working with apps and hubs from the brand. In some cases the firmware update can cause your device to react differently then what Zigbee2MQTT expects, resulting in undesired behavior, no-longer accessible features, etc., at least until Zigbee2MQTT is updated to take those changes into account. If you get annoyed by the notifications that there are updates available, then turn the automatic check off.</p></div><p>Not all manufacturers make their updates available, you can watch for new additions in <a href="https://github.com/Koenkk/zigbee-OTA/releases" target="_blank" rel="noopener noreferrer">zigbee-OTA Releases</a>, which, if available, include the changes in these new updates.</p><p>To check whether your specific device supports OTA updates via Zigbee2MQTT, go to the supported devices page, click on your device and look for the <em>OTA updates</em> section.</p><h2 id="automatic-checking-for-available-updates" tabindex="-1"><a class="header-anchor" href="#automatic-checking-for-available-updates"><span>Automatic checking for available updates</span></a></h2><p>Your Zigbee devices can request a firmware update check. Upon reception of such a request, Zigbee2MQTT will automatically check if an update is available and reply to the device accordingly.</p><p>The update state will be published to <code>zigbee2mqtt/[DEVICE_FRIENDLY_NAME]</code>, example payload: <code>{&quot;update&quot;: {&quot;state&quot;: &quot;available&quot;}}</code>. The possible states are:</p><ul><li><code>available</code>: An update is available for this device</li><li><code>updating</code>: Update is in progress. During this the progress in % and remaining time in seconds is also added to the payload, example: <code>{&quot;update&quot;: {&quot;state&quot;: &quot;updating&quot;,&quot;progress&quot;:13.37,&quot;remaining&quot;: 219}}</code>.</li><li><code>idle</code>: No update available/in progress</li></ul><p>You can set the minimum time that should pass between two firmware update checks, in minutes. The default is 1440 minutes (1 day). Here it is set to check at most every two days:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">update_check_interval</span><span class="token punctuation">:</span> <span class="token number">2880</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>It is also possible to completely ignore these device-initiated requests for updates checks by modifying the <code>configuration.yaml</code> file. In the example below, only manual firmware update checks will be possible:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">disable_automatic_update_check</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="manually-check-if-an-update-is-available" tabindex="-1"><a class="header-anchor" href="#manually-check-if-an-update-is-available"><span>Manually check if an update is available</span></a></h2><p>To check if an upgrade is available for your device send a message to <code>zigbee2mqtt/bridge/request/device/ota_update/check</code> with payload <code>{&quot;id&quot;: &quot;deviceID&quot;}</code> or <code>deviceID</code> where deviceID can be the <code>ieee_address</code> or <code>friendly_name</code> of the device. Example; request: <code>{&quot;id&quot;: &quot;my_remote&quot;}</code> or <code>my_remote</code>, response: <code>{&quot;data&quot;:{&quot;id&quot;: &quot;my_remote&quot;,&quot;update_available&quot;:true},&quot;status&quot;:&quot;ok&quot;}</code>. For battery powered end-devices you may need to trigger them by e.g. pushing a button right before checking for an OTA.</p><h3 id="downgrade" tabindex="-1"><a class="header-anchor" href="#downgrade"><span>Downgrade</span></a></h3><p>Same as above, but send the message to <code>zigbee2mqtt/bridge/request/device/ota_update/check/downgrade</code> instead.</p><h2 id="update-firmware" tabindex="-1"><a class="header-anchor" href="#update-firmware"><span>Update firmware</span></a></h2><p>When an update is available for your device, you can upgrade it by sending a message to <code>zigbee2mqtt/bridge/request/device/ota_update/update</code> with payload <code>{&quot;id&quot;: &quot;deviceID&quot;}</code> or <code>deviceID</code> where deviceID can be the <code>ieee_address</code> or <code>friendly_name</code> of the device, example request: <code>{&quot;id&quot;: &quot;my_remote&quot;}</code> or <code>my_remote</code>. Once the update is completed a response is send, example response: <code>{&quot;data&quot;:{&quot;id&quot;: &quot;my_remote&quot;,&quot;from&quot;:{&quot;software_build_id&quot;:1,&quot;date_code&quot;:&quot;20190101&quot;},&quot;to&quot;:{&quot;software_build_id&quot;:2,&quot;date_code&quot;:&quot;20190102&quot;}},&quot;status&quot;:&quot;ok&quot;}</code>.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>An update typically takes 10-20 minutes (although some devices may take a lot longer). While a device is updating a lot of traffic is generated on the network, therefore it is not recommended to execute multiple updates at the same time, and ideally to update while the network is less in-demand.</p></div><h3 id="downgrade-1" tabindex="-1"><a class="header-anchor" href="#downgrade-1"><span>Downgrade</span></a></h3><p>Same as above but send the message to <code>zigbee2mqtt/bridge/request/device/ota_update/update/downgrade</code> instead.</p><h2 id="local-ota-index-and-firmware-files" tabindex="-1"><a class="header-anchor" href="#local-ota-index-and-firmware-files"><span>Local OTA index and firmware files</span></a></h2><p>An OTA index file is a list of firmware images available in designated locations. When checking if an update is available, Zigbee2MQTT determines current hardware and firmware version for a particular device, and then searches for a suitable upgrade image in the index file. Zigbee2MQTT uses the <a href="https://github.com/Koenkk/zigbee-OTA" target="_blank" rel="noopener noreferrer">Zigbee-OTA</a> firmware repository with contains the <a href="https://github.com/Koenkk/zigbee-OTA/blob/master/index.json" target="_blank" rel="noopener noreferrer">upgrade index file</a>, and the <a href="https://github.com/Koenkk/zigbee-OTA/blob/master/index1.json" target="_blank" rel="noopener noreferrer">downgrade index file</a>.</p><p>Sometimes it is necessary to add a firmware image that is not in that repository. This could be helpful when developing a DIY device, or install a test/alternate image for a mass-produced device. In this case you can supply Zigbee2MQTT with an alternate index file, located locally or on a web server. This index file will point Zigbee2MQTT to the firmware image files. Records in the override OTA index file will take precedence over the records in the Zigbee-OTA repository, so that it is possible to alter the image for a particular device.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">zigbee_ota_override_index_location</span><span class="token punctuation">:</span> my_index.json</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>A local index file is searched in the data directory (next to <code>configuration.yaml</code>). The file name also could be a full path to the file, taking into account that the host file system may not be available when running Zigbee2MQTT in a virtualized environment (Docker, etc.). Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case <code>zigbee_ota_override_index_location</code> should point to the URL of the index file.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">zigbee_ota_override_index_location</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//example.com/ota/my_index.json</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The override OTA index file shall have the same structure as the <a href="https://github.com/Koenkk/zigbee-OTA/blob/master/index.json" target="_blank" rel="noopener noreferrer">Zigbee-OTA index file</a>.</p><p>For local files, only image location is required through <code>url</code> (either a full path to the image file, or relative to the Zigbee2MQTT data directory). Zigbee2MQTT can derive the rest from the files themselves:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>\n<span class="line">    <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./path/to/my/image.ota&quot;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For hosted files, on top of <code>url</code>, all required metadata must be provided (<code>imageType</code>, <code>manufacturerCode</code>, <code>fileVersion</code>, all expected to match that of the file at <code>url</code>):</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>\n<span class="line">    <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/path/to/my/image.ota&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;imageType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;manufactureCode&quot;</span><span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;fileVersion&quot;</span><span class="token operator">:</span> <span class="token number">321</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://github.com/Koenkk/zigbee-OTA/tree/master?tab=readme-ov-file#notes-for-maintainers--developers" target="_blank" rel="noopener noreferrer">Zigbee-OTA README</a> if an image requires extra metadata.</p><p>Normally Zigbee2MQTT compares the current device&#39;s firmware version with the version of the available image, and allows flashing only if <code>fileVersion</code> is higher than the current one for upgrades, or lower for downgrades. To force Zigbee2MQTT to use an arbitrary version you can set <code>force</code> to <code>true</code>:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>\n<span class="line">    <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HelloZigbee.ota&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;force&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Even though Zigbee specification allows firmware downgrading, some devices may reject older firmware versions. Additionally, updating to a firmware of same version is not supported by Zigbee specification. This cannot be forced by Zigbee2MQTT.</p></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2><ul><li><code>Device didn&#39;t respond to OTA request</code> or <code>Update failed with reason: &#39;aborted by device&#39;</code>: try restarting the device by disconnecting the power/battery for a few seconds, then try OTA again, make sure to activate the device by pressing a button on it right before sending the update request.</li><li>For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming. Some devices check for a minimum battery level prior to updating and will refuse to update if too low.</li><li>Make sure your log level is set to <code>info</code>. When set to <code>warning</code> or <code>error</code>, frontend will not report some messages indicating the current OTA status.</li></ul><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><p>You can increase or decrease the default speed (the minimum delay between two chunks) at which Zigbee2MQTT responds during the update process to send chunks of images. The default is 250ms. A higher speed will result in faster OTA updates, but may require a far more stable network to avoid issues, crashes. A lower speed will result in slower OTA updates, but may noticeably increase reliability, and overall network stability.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">image_block_response_delay</span><span class="token punctuation">:</span> <span class="token number">250</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Minimum: 50</p><p>You can increase or decrease the size of image chunks sent by Zigbee2MQTT during the update process. The default is 50 bytes. The behavior is similar to <code>image_block_response_delay</code> regarding the effect of higher or lower values.</p><p><em>Note that for some known combinations (manufacturer/version/etc.), expected sizes will always override this setting to ensure they work correctly.</em></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">default_maximum_data_size</span><span class="token punctuation">:</span> <span class="token number">50</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Minimum: 10, Maximum: 100</p><div class="hint-container warning"><p class="hint-container-title">ATTENTION</p><p>Some devices will refuse higher sizes than 50 bytes, some 64 bytes. Several network parameters must also be taken into account to derive this value. It is not recommended to change this setting unless you have a very good reason (instructed to do so in an issue for example).</p></div>',49)]))}]]),o=JSON.parse('{"path":"/guide/usage/ota_updates.html","title":"OTA updates","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Automatic checking for available updates","slug":"automatic-checking-for-available-updates","link":"#automatic-checking-for-available-updates","children":[]},{"level":2,"title":"Manually check if an update is available","slug":"manually-check-if-an-update-is-available","link":"#manually-check-if-an-update-is-available","children":[{"level":3,"title":"Downgrade","slug":"downgrade","link":"#downgrade","children":[]}]},{"level":2,"title":"Update firmware","slug":"update-firmware","link":"#update-firmware","children":[{"level":3,"title":"Downgrade","slug":"downgrade-1","link":"#downgrade-1","children":[]}]},{"level":2,"title":"Local OTA index and firmware files","slug":"local-ota-index-and-firmware-files","link":"#local-ota-index-and-firmware-files","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]},{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]}],"git":{"updatedTime":1738410054000},"filePathRelative":"guide/usage/ota_updates.md"}')}}]);