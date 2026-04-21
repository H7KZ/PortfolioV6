import CircleFlagsCZ from '$lib/icons/CircleFlagsCZ.svelte';
import CircleFlagsEN from '$lib/icons/CircleFlagsEN.svelte';
import type { Component } from 'svelte';

const circleFlagsComponents: Record<string, Component> = {
	cz: CircleFlagsCZ,
	cs: CircleFlagsCZ,
	'cs-CZ': CircleFlagsCZ,
	en: CircleFlagsEN
};

export default circleFlagsComponents;
