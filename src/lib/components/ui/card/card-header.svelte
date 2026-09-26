<script lang="ts">
	import type { CardHeaderProps } from './index';

	let { children, class: className, ...restProps }: CardHeaderProps = $props();
</script>

<h4
	aria-label="Card title"
	class="w-full text-sm font-semibold tracking-[-1%] {className ?? ''}"
	{...restProps}
>
	{@render children?.()}
</h4>
