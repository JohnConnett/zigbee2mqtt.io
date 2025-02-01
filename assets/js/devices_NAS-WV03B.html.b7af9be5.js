"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55243],{24824:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>l});var o=a(6254);const i={},n=(0,a(32991).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"neo-nas-wv03b",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#neo-nas-wv03b"},[(0,o.Lk)("span",null,"Neo NAS-WV03B")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"NAS-WV03B")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Neo"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Neo")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Smart sprinkler timer")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"switch (state), status, countdown, countdown_left, water_current, battery_percentage, water_total, fault, weather_delay, normal_timer, switch_enabled, smart_irrigation, total_flow_reset_switch, quantitative_watering, flow_switch, child_lock, surplus_flow, single_watering_duration, single_watering_amount, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-WV03B.png",alt:"Neo NAS-WV03B"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum"><span>Status (enum)</span></a></h3><p>Status. Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>off</code>, <code>auto</code>, <code>disabled</code>.</p><h3 id="countdown-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-numeric"><span>Countdown (numeric)</span></a></h3><p>Countdown. Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>240</code>. The unit of this value is <code>min</code>.</p><h3 id="countdown-left-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-left-numeric"><span>Countdown left (numeric)</span></a></h3><p>Countdown left. Value can be found in the published state on the <code>countdown_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>1</code> and the maximum value is <code>240</code>. The unit of this value is <code>min</code>.</p><h3 id="water-current-numeric" tabindex="-1"><a class="header-anchor" href="#water-current-numeric"><span>Water current (numeric)</span></a></h3><p>Current water flow (L/min). Value can be found in the published state on the <code>water_current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>3785.41</code>. The unit of this value is <code>L/min</code>.</p><h3 id="battery-percentage-numeric" tabindex="-1"><a class="header-anchor" href="#battery-percentage-numeric"><span>Battery percentage (numeric)</span></a></h3><p>Battery percentage. Value can be found in the published state on the <code>battery_percentage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="water-total-numeric" tabindex="-1"><a class="header-anchor" href="#water-total-numeric"><span>Water total (numeric)</span></a></h3><p>Total water flow (L). Value can be found in the published state on the <code>water_total</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>378541</code>. The unit of this value is <code>L</code>.</p><h3 id="fault-binary" tabindex="-1"><a class="header-anchor" href="#fault-binary"><span>Fault (binary)</span></a></h3><p>Fault status. Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>DETECTED</code> fault is ON, if <code>NOT_DETECTED</code> OFF.</p><h3 id="weather-delay-enum" tabindex="-1"><a class="header-anchor" href="#weather-delay-enum"><span>Weather delay (enum)</span></a></h3><p>Weather delay. Value can be found in the published state on the <code>weather_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;weather_delay&quot;: NEW_VALUE}</code>. The possible values are: <code>24h</code>, <code>48h</code>, <code>72h</code>, <code>cancel</code>.</p><h3 id="normal-timer-text" tabindex="-1"><a class="header-anchor" href="#normal-timer-text"><span>Normal timer (text)</span></a></h3><p>Normal timer. Value can be found in the published state on the <code>normal_timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_timer&quot;: NEW_VALUE}</code>.</p><h3 id="switch-enabled-binary" tabindex="-1"><a class="header-anchor" href="#switch-enabled-binary"><span>Switch enabled (binary)</span></a></h3><p>Switch enabled. Value can be found in the published state on the <code>switch_enabled</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_enabled&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> switch enabled is ON, if <code>OFF</code> OFF.</p><h3 id="smart-irrigation-numeric" tabindex="-1"><a class="header-anchor" href="#smart-irrigation-numeric"><span>Smart irrigation (numeric)</span></a></h3><p>Smart irrigation. Value can be found in the published state on the <code>smart_irrigation</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="total-flow-reset-switch-binary" tabindex="-1"><a class="header-anchor" href="#total-flow-reset-switch-binary"><span>Total flow reset switch (binary)</span></a></h3><p>Total flow reset switch. Value can be found in the published state on the <code>total_flow_reset_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;total_flow_reset_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> total flow reset switch is ON, if <code>OFF</code> OFF.</p><h3 id="quantitative-watering-numeric" tabindex="-1"><a class="header-anchor" href="#quantitative-watering-numeric"><span>Quantitative watering (numeric)</span></a></h3><p>Quantitative watering. Value can be found in the published state on the <code>quantitative_watering</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;quantitative_watering&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>. The unit of this value is <code>L</code>.</p><h3 id="flow-switch-binary" tabindex="-1"><a class="header-anchor" href="#flow-switch-binary"><span>Flow switch (binary)</span></a></h3><p>Flow switch. Value can be found in the published state on the <code>flow_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;flow_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> flow switch is ON, if <code>OFF</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Child lock. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> child lock is ON, if <code>OFF</code> OFF.</p><h3 id="surplus-flow-numeric" tabindex="-1"><a class="header-anchor" href="#surplus-flow-numeric"><span>Surplus flow (numeric)</span></a></h3><p>Surplus flow. Value can be found in the published state on the <code>surplus_flow</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="single-watering-duration-numeric" tabindex="-1"><a class="header-anchor" href="#single-watering-duration-numeric"><span>Single watering duration (numeric)</span></a></h3><p>Single watering duration. Value can be found in the published state on the <code>single_watering_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="single-watering-amount-numeric" tabindex="-1"><a class="header-anchor" href="#single-watering-amount-numeric"><span>Single watering amount (numeric)</span></a></h3><p>Single watering amount. Value can be found in the published state on the <code>single_watering_amount</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',41))])}]]),l=JSON.parse('{"path":"/devices/NAS-WV03B.html","title":"Neo NAS-WV03B control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-WV03B control via MQTT","description":"Integrate your Neo NAS-WV03B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Status (enum)","slug":"status-enum","link":"#status-enum","children":[]},{"level":3,"title":"Countdown (numeric)","slug":"countdown-numeric","link":"#countdown-numeric","children":[]},{"level":3,"title":"Countdown left (numeric)","slug":"countdown-left-numeric","link":"#countdown-left-numeric","children":[]},{"level":3,"title":"Water current (numeric)","slug":"water-current-numeric","link":"#water-current-numeric","children":[]},{"level":3,"title":"Battery percentage (numeric)","slug":"battery-percentage-numeric","link":"#battery-percentage-numeric","children":[]},{"level":3,"title":"Water total (numeric)","slug":"water-total-numeric","link":"#water-total-numeric","children":[]},{"level":3,"title":"Fault (binary)","slug":"fault-binary","link":"#fault-binary","children":[]},{"level":3,"title":"Weather delay (enum)","slug":"weather-delay-enum","link":"#weather-delay-enum","children":[]},{"level":3,"title":"Normal timer (text)","slug":"normal-timer-text","link":"#normal-timer-text","children":[]},{"level":3,"title":"Switch enabled (binary)","slug":"switch-enabled-binary","link":"#switch-enabled-binary","children":[]},{"level":3,"title":"Smart irrigation (numeric)","slug":"smart-irrigation-numeric","link":"#smart-irrigation-numeric","children":[]},{"level":3,"title":"Total flow reset switch (binary)","slug":"total-flow-reset-switch-binary","link":"#total-flow-reset-switch-binary","children":[]},{"level":3,"title":"Quantitative watering (numeric)","slug":"quantitative-watering-numeric","link":"#quantitative-watering-numeric","children":[]},{"level":3,"title":"Flow switch (binary)","slug":"flow-switch-binary","link":"#flow-switch-binary","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Surplus flow (numeric)","slug":"surplus-flow-numeric","link":"#surplus-flow-numeric","children":[]},{"level":3,"title":"Single watering duration (numeric)","slug":"single-watering-duration-numeric","link":"#single-watering-duration-numeric","children":[]},{"level":3,"title":"Single watering amount (numeric)","slug":"single-watering-amount-numeric","link":"#single-watering-amount-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1738410054000},"filePathRelative":"devices/NAS-WV03B.md"}')}}]);