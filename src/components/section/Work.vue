<template>
  <div class="work">
    <Company name="Meta" :from="new Date(2017, 6)">
      <li>
        Led the 'Smart Office' team, delivering internal applications (navigation, room management,
        and video conferencing) used by 100k+ employees. Helped define the multi-year technical
        roadmap and scaled the platform across hundreds of global campuses and data centres.
      </li>
      <li>
        Drove cross-organizational alignment to deliver VC Panel's first two major versions,
        coordinating ~30 contributors across 3 teams (software, hardware, industrial design, and
        product design). This initiative significantly improved meeting efficiency, compared to the
        Cisco Navigators we used previously.
      </li>
      <li>
        Organised and hosted company-wide conference for front-end developers for five years,
        growing from 50 to 300 attendees. This became the primary forum for sharing best practices,
        as well as showcasing new technologies and tools.
      </li>
      <li>
        Resolved a key meeting-room efficiency issue, increasing room utilisation by 15%+. This
        work won a company-wide award and I presented it at our company all-hands in front of the
        CEO, CFO and thousands of colleagues.
      </li>
    </Company>
    <Company name="IRESS" contract :from="new Date(2016, 10)" :to="new Date(2017, 1)">
      <li>Helped ship version 1.0 of PRIME, a CRM tool for financial planners</li>
    </Company>
    <Company name="Holler" contract :from="new Date(2016, 2)" :to="new Date(2016, 9)">
      <li>Introduced code reviews &amp; pull requests to improve reliability</li>
    </Company>
    <Company name="StageMe" contract :from="new Date(2015, 1)" :to="new Date(2016, 1)">
      <li>Worked directly with the CEO to build customer-facing website</li>
    </Company>
    <Company name="Westfield Labs" contract :from="new Date(2014, 10)" :to="new Date(2015, 2)">
      <li>Contributed to the redevelopment of UK, US, and Australian websites on Adobe Experience Manager</li>
    </Company>
    <Company name="The White Agency" contract :from="new Date(2014, 7)" :to="new Date(2014, 10)">
      <li>Led the introduction of a new toolchain (including Gulp, SASS, Compass, JSHint)</li>
    </Company>
    <Company name="Atlassian" :from="new Date(2014, 4)" :to="new Date(2014, 7)">
      <li>
        Built internal tool featuring a chat bot that would help schedule company &amp; social
        events from within HipChat
      </li>
    </Company>
    <Company name="Nearmap" contract :from="new Date(2013, 5)" :to="new Date(2014, 4)">
      <li>
        Led a project to rebuild the company's primary product, a map browser, from the ground up in
        order to improve ease-of-use and reduce technical debt
      </li>
    </Company>
    <Company name="HotHouse" :from="new Date(2012, 7)" :to="new Date(2013, 5)">
      <li>
        Lead developer (full-stack) in a project to gamify toyota.com.au in order to give away two
        RAV4s
      </li>
    </Company>
    <Company name="Corporate Interactive" :from="new Date(2012, 0)" :to="new Date(2012, 7)">
      <li>Was the sole front-end developer, building over 50 new websites in 8 months</li>
    </Company>
    <Company name="Radioinfo" :from="new Date(2010, 1)" :to="new Date(2013, 4)">
      <li>Maintained &amp; updated Django website for two years as their sole developer.</li>
    </Company>
  </div>
</template>

<script>
import Company from '../Company.vue';

export default {
  name: 'Work',
  components: {
    Company,
  },
};
</script>

<style scoped lang="scss">
.work {
}
</style>
