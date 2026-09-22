<script>
	let year = $state('');
	$effect(() => {
		const dateObj = new Date();
		year = dateObj.getFullYear().toString();
	});

	const businessDetails = {
		name: 'House of Dipp',
		address: '1st St. N White Cocal, Corozal, Belize',
		workingHours: [
			{
				days: 'Mon & Wed',
				hours: '12:00pm - 9:00pm'
			},
			{
				days: 'Tues & Thurs',
				hours: '4:00pm - 9:00pm'
			},
			{
				days: 'Fri & Sat',
				hours: '11:00am - 9:00pm'
			},
			{
				days: 'Sunday',
				hours: 'CLOSED'
			}
		]
	};
</script>

<footer class="border-t border-muted-foreground bg-accent-hover pt-4 pb-6">
	<div class="space-y-4">
		<h1 class="text-center text-sm leading-[1.2em] tracking-[1%]">
			{businessDetails.address}
		</h1>

		<div class="mt-6 text-center">
			<h2 class="mb-3 text-[12px] leading-[1.2em] font-semibold tracking-[1%]">
				Hours of Operation
			</h2>

			<div class="grid grid-cols-2 gap-3 text-xs">
				<div>
					{#each businessDetails.workingHours as workingHours}
						<p class="text-end font-medium">{workingHours.days}:</p>
					{/each}
				</div>
				<div>
					{#each businessDetails.workingHours as workingHours}
						<p class="text-start last:font-semibold">{workingHours.hours}</p>
					{/each}
				</div>
			</div>
		</div>
		<p class="text-center text-sm text-muted-foreground">{businessDetails.name} &copy; {year}</p>
	</div>
</footer>
