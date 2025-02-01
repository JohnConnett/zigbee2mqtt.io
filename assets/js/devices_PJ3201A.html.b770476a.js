"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64985],{21896:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>c});var n=i(6254);const o={},a=(0,i(32991).A)(o,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"dongguan-pinjia-technology-co-ltd-pj3201a",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#dongguan-pinjia-technology-co-ltd-pj3201a"},[(0,n.Lk)("span",null,"Dongguan Pinjia Technology Co.,LTD. PJ3201A")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"PJ3201A")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=Dongguan%20Pinjia%20Technology%20Co.%2CLTD."},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Dongguan Pinjia Technology Co.,LTD.")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Human Presence Sensor")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"presence, occupancy, closest_target_distance, movement_timeout, idle_timeout, illuminance, far_movement_sensitivity, near_movement_sensitivity, near_presence_sensitivity, far_presence_sensitivity, closest_detection_distance, largest_movement_detection_distance, largest_presence_detection_distance, restore_factory, led_indicator, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PJ3201A.png",alt:"Dongguan Pinjia Technology Co.,LTD. PJ3201A"})])],-1))])]),t[9]||(t[9]=(0,n.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,n.Lk)("span",null,"Notes")])],-1)),t[10]||(t[10]=(0,n.Lk)("p",null,"Occupancy indicated active movement. The attribute is not directly affected by the movement delay. But the movement delay will affect after what time the presence state is reset if only movement was detected but no presence.",-1)),t[11]||(t[11]=(0,n.Lk)("p",null,"Flip the factory reset to any state to restore factory settings. This will not reset zigbee settings only the sensor default values are loaded.",-1)),t[12]||(t[12]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[13]||(t[13]=(0,n.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Will be true also when movement (occupancy) is detected.. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected movement. Will be true when movement. Can remain true even if the target left the detection range. In this case presence will be reset to false reliably.. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="closest-target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#closest-target-distance-numeric"><span>Closest target distance (numeric)</span></a></h3><p>the target distance away from the sensor. Value can be found in the published state on the <code>closest_target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="movement-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#movement-timeout-numeric"><span>Movement timeout (numeric)</span></a></h3><p>Timeout until the movement (occupancy) is reset when no further movement is detected. (Occupancy -&gt; None). Value can be found in the published state on the <code>movement_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;movement_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="idle-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#idle-timeout-numeric"><span>Idle timeout (numeric)</span></a></h3><p>Timeout until the presence is reset when no further presence is detected (Presence -&gt; None). Value can be found in the published state on the <code>idle_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;idle_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="far-movement-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#far-movement-sensitivity-numeric"><span>Far movement sensitivity (numeric)</span></a></h3><p>the moving detecting sensitivity 1 meter away. Value can be found in the published state on the <code>far_movement_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;far_movement_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="near-movement-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#near-movement-sensitivity-numeric"><span>Near movement sensitivity (numeric)</span></a></h3><p>the moving detecting sensitivity within 1 meter. Value can be found in the published state on the <code>near_movement_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;near_movement_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="near-presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#near-presence-sensitivity-numeric"><span>Near presence sensitivity (numeric)</span></a></h3><p>the presence detecting sensitivity within 1 meter. Value can be found in the published state on the <code>near_presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;near_presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="far-presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#far-presence-sensitivity-numeric"><span>Far presence sensitivity (numeric)</span></a></h3><p>the presence detecting sensitivity 1 meter away. Value can be found in the published state on the <code>far_presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;far_presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="closest-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#closest-detection-distance-numeric"><span>Closest detection distance (numeric)</span></a></h3><p>The closest distance that can be detected. Value can be found in the published state on the <code>closest_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;closest_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>7</code>. The unit of this value is <code>m</code>.</p><h3 id="largest-movement-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#largest-movement-detection-distance-numeric"><span>Largest movement detection distance (numeric)</span></a></h3><p>The farest distance that can be detected (moving). Value can be found in the published state on the <code>largest_movement_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;largest_movement_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>7</code>. The unit of this value is <code>m</code>.</p><h3 id="largest-presence-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#largest-presence-detection-distance-numeric"><span>Largest presence detection distance (numeric)</span></a></h3><p>The farest distance that can be detected (present). Value can be found in the published state on the <code>largest_presence_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;largest_presence_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>7</code>. The unit of this value is <code>m</code>.</p><h3 id="restore-factory-binary" tabindex="-1"><a class="header-anchor" href="#restore-factory-binary"><span>Restore factory (binary)</span></a></h3><p>restore_factory. Value can be found in the published state on the <code>restore_factory</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;restore_factory&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> restore factory is ON, if <code>OFF</code> OFF.</p><h3 id="led-indicator-binary" tabindex="-1"><a class="header-anchor" href="#led-indicator-binary"><span>Led indicator (binary)</span></a></h3><p>turn on or off the led . Value can be found in the published state on the <code>led_indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led indicator is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',34))])}]]),c=JSON.parse('{"path":"/devices/PJ3201A.html","title":"Dongguan Pinjia Technology Co.,LTD. PJ3201A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Dongguan Pinjia Technology Co.,LTD. PJ3201A control via MQTT","description":"Integrate your Dongguan Pinjia Technology Co.,LTD. PJ3201A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:04:59.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Closest target distance (numeric)","slug":"closest-target-distance-numeric","link":"#closest-target-distance-numeric","children":[]},{"level":3,"title":"Movement timeout (numeric)","slug":"movement-timeout-numeric","link":"#movement-timeout-numeric","children":[]},{"level":3,"title":"Idle timeout (numeric)","slug":"idle-timeout-numeric","link":"#idle-timeout-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Far movement sensitivity (numeric)","slug":"far-movement-sensitivity-numeric","link":"#far-movement-sensitivity-numeric","children":[]},{"level":3,"title":"Near movement sensitivity (numeric)","slug":"near-movement-sensitivity-numeric","link":"#near-movement-sensitivity-numeric","children":[]},{"level":3,"title":"Near presence sensitivity (numeric)","slug":"near-presence-sensitivity-numeric","link":"#near-presence-sensitivity-numeric","children":[]},{"level":3,"title":"Far presence sensitivity (numeric)","slug":"far-presence-sensitivity-numeric","link":"#far-presence-sensitivity-numeric","children":[]},{"level":3,"title":"Closest detection distance (numeric)","slug":"closest-detection-distance-numeric","link":"#closest-detection-distance-numeric","children":[]},{"level":3,"title":"Largest movement detection distance (numeric)","slug":"largest-movement-detection-distance-numeric","link":"#largest-movement-detection-distance-numeric","children":[]},{"level":3,"title":"Largest presence detection distance (numeric)","slug":"largest-presence-detection-distance-numeric","link":"#largest-presence-detection-distance-numeric","children":[]},{"level":3,"title":"Restore factory (binary)","slug":"restore-factory-binary","link":"#restore-factory-binary","children":[]},{"level":3,"title":"Led indicator (binary)","slug":"led-indicator-binary","link":"#led-indicator-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1738410054000},"filePathRelative":"devices/PJ3201A.md"}')}}]);