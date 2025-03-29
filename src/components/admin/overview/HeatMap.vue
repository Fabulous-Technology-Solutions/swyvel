<template>
  <q-card class="map-card no-shadow">
    <q-card-section>
      <div ref="mapContainer" class="map-container full-width"></div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as d3 from 'd3'
import { feature } from 'topojson-client'

const props = defineProps({
  details: String,
})
const mapContainer = ref(null)
const countryData = ref([])
const missInfo = ref([])
const highEngage = ref([])
if (props.details === 'ai-insights') {
  countryData.value = [
    { name: 'United States', rate: '78.5%' },
    { name: 'United Kingdom', rate: '45.8%' },
    { name: 'Canada', rate: '40.5%' },
    { name: 'Autralia', rate: '50.1%' },
    { name: 'Brazil', rate: '68.5%' },
    { name: 'Russia', rate: '89.2%' },
    { name: 'Greenland', rate: '89.2%' },
    { name: 'United States Of America', rate: '89.2%' },
    { name: 'Mexico', rate: '89.2%' },
    { name: 'Colombia', rate: '89.2%' },
    { name: 'Venezuela', rate: '89.2%' },
    { name: 'Argentina', rate: '89.2%' },
    { name: 'Peru', rate: '89.2%' },
    { name: 'Chile', rate: '89.2%' },
    { name: 'Ecuador', rate: '89.2%' },
    { name: 'Bolivia', rate: '89.2%' },
    { name: 'Australia', rate: '89.2%' },
    { name: 'Niger', rate: '89.2%' },
    { name: 'Algeria', rate: '89.2%' },
  ]
} else if (props.details === 'audience-Analysis') {
  countryData.value = [
   { name: 'Niger', rate: '89.2%' },
    { name: 'Algeria', rate: '89.2%' },
    { name: 'United States Of America', rate: '89.2%' },

  ]
  missInfo.value = [
    { name: 'United States', rate: '78.5%' },
    { name: 'United Kingdom', rate: '45.8%' },
    { name: 'India', rate: '30.5%' },
    { name: 'Russia', rate: '25.5%' },
    { name: 'GreenLand', rate: '25.5%' },
    { name: 'Argentina', rate: '25.5%' },
    { name: 'Mexico', rate: '89.2%' },
  ]
  highEngage.value = [
    { name: 'Autralia', rate: '50.1%' },
    { name: 'China', rate: '25.5%' },
    { name: 'Canada', rate: '90.5%' },
    { name: 'Brazil', rate: '68.5%' },
    { name: 'South Africa', rate: '89.2%' },
    { name: 'Libia', rate: '89.2%' },
    { name: 'Egypt', rate: '89.2%' },
    { name: 'Sudan', rate: '89.2%' },
    { name: 'South Africa', rate: '89.2%' },

  ]
} else {
  countryData.value = [
    { name: 'United States', rate: '78.5%' },
    { name: 'United Kingdom', rate: '45.8%' },
    { name: 'Canada', rate: '40.5%' },
    { name: 'Autralia', rate: '50.1%' },
    { name: 'India', rate: '30.5%' },
    { name: 'China', rate: '25.5%' },
    { name: 'Brazil', rate: '68.5%' },
    { name: 'South Africa', rate: '89.2%' },
  ]
}

// Color scale
// const colorScale = d3
//   .scaleSequential(d3.interpolatePlasma)
//   .domain([0, d3.max(Object.values(countryData.value), (d) => d.value)])
// Initialize map
onMounted(async () => {
  await drawMap()
  window.addEventListener('resize', handleResize)
})

// Cleanup
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

// Draw map with equirectangular projection
async function drawMap() {
  const containerWidth = mapContainer.value.clientWidth
  const aspectRatio = 2
  const width = containerWidth
  const height = width / aspectRatio

  // Create SVG
  const svg = d3
    .select(mapContainer.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])

  // Create map group
  const g = svg.append('g')

  // Create projection
  const projection = d3.geoEquirectangular().fitExtent(
    [
      [10, 10],
      [width - 10, height - 10],
    ],
    {
      type: 'Sphere',
      coordinates: [
        [-180, -90],
        [180, 90],
      ],
    },
  )

  const path = d3.geoPath().projection(projection)

  // Load world map data
  const world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
  const countries = feature(world, world.objects.countries).features

  // Draw countries with data-driven colors
  g.selectAll('path.country')
    .data(countries)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', path)
    .attr('id', (d) => d.id)
    .attr('fill', (d) => {
      // Find if this country exists in your data
      if (props.details === 'audience-Analysis') {
        // if(missInfo.value.length > 0) {
        const missInfoExist = Object.values(missInfo.value).some(
          (country) => country.name.toLowerCase() === d.properties.name?.toLowerCase(),
        )
        const countryExists = Object.values(countryData.value).some(
          (country) => country.name.toLowerCase() === d.properties.name?.toLowerCase(),
        )
        //   return missInfoExist ? 'blue' : '#D9D9D9'
        // }else if(highEngage.value.length > 0) {
        const highEngageExist = Object.values(highEngage.value).some(
          (country) => country.name.toLowerCase() === d.properties.name?.toLowerCase(),
        )
        if (highEngageExist) return '#2F5CEF' // Blue

        if (missInfoExist) return '#CB1F27' // Red

        if (countryExists) return '#D6AE51' // Gold

        // 4. Default color for all other countries
        return '#D9D9D9'
        // }
      } else {
        const countryExists = Object.values(countryData.value).some(
          (country) => country.name.toLowerCase() === d.properties.name?.toLowerCase(),
        )
        // Return orange if country exists in your data, black otherwise
        return countryExists ? '#D6AE51' : '#D9D9D9'
      }
    })
    .attr('stroke', '#fff')
    .attr('stroke-width', 0.5)
    .on('mouseover', function (event, d) {
      // Highlight country
      d3.select(this).attr('stroke', '#599BE7').attr('stroke-width', 1.5)

      // Create or reuse tooltip
      let tooltip = d3.select(this).datum().tooltip

      if (!tooltip) {
        tooltip = d3
          .select(document.body)
          .append('div')
          .attr('class', 'country-tooltip bg-primary text-white')
          .style('position', 'absolute')
          .style('pointer-events', 'none')
          .style('z-index', '10000')
          .style('padding', '4px 8px')
          .style('border-radius', '4px')
          .style('font-size', '12px')

        // Store tooltip reference
        d3.select(this).datum({ ...d3.select(this).datum(), tooltip })
      }

      // Update tooltip content and position
      tooltip
        .text(d.properties.name)
        .style('left', event.pageX + 10 + 'px')
        .style('top', event.pageY + 10 + 'px')
        .style('opacity', 1)
    })
    .on('mouseout', function () {
      // Remove highlight
      d3.select(this).attr('stroke', '#fff').attr('stroke-width', 0.5)

      // Hide tooltip but don't remove it
      const tooltip = d3.select(this).datum().tooltip
      if (tooltip) {
        tooltip.style('opacity', 0)
      }
    })
    .on('mousemove', function (event) {
      // Update tooltip position
      const tooltip = d3.select(this).datum().tooltip
      if (tooltip) {
        tooltip.style('left', event.pageX + 10 + 'px').style('top', event.pageY + 10 + 'px')
      }
    })
    .on('click', (event, d) => {
      const data = countryData.value[d.id]
      if (data) {
        console.log(`Clicked: ${data.name} (Value: ${data.value})`)
      }
    })

  // Add zoom/pan behavior
  svg.call(
    d3
      .zoom()
      .scaleExtent([1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
      }),
  )
}

// Handle window resize
function handleResize() {
  if (!mapContainer.value) return

  const containerWidth = mapContainer.value.clientWidth
  const aspectRatio = 2
  const width = containerWidth
  const height = width / aspectRatio

  const svg = d3.select(mapContainer.value).select('svg')
  svg.attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height])
}
</script>

<style scoped>
.map-card {
  width: 100%;
  background: transparent;
}

.map-container {
  width: 100%;
  height: auto;
  aspect-ratio: 2;
  border-radius: 8px;
}

.country {
  transition:
    fill 0.3s ease,
    stroke-width 0.2s ease;
}

.country:hover {
  stroke: #333 !important;
  stroke-width: 1.5px !important;
  filter: brightness(1.1);
}
</style>
