$(document).foundation()

$('[data-toggle-dia]').click(function (ev) {
	/* Act on the event */
 	const panel = $(this).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab', panel)
});