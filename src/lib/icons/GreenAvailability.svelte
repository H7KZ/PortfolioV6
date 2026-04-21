<script lang="ts">
	let { ...rest } = $props();
</script>

<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
	<circle cx="12" cy="12" r="12" fill="url(#paint0_radial_732_27)" fill-opacity="0.35" />
	<circle cx="12" cy="12" r="7" fill="#8BC26C" />
	<defs>
		<radialGradient id="paint0_radial_732_27" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) rotate(90) scale(12)">
			<stop stop-color="#87D65B" />
			<stop offset="1" stop-color="#426031" />
		</radialGradient>
	</defs>
</svg>
