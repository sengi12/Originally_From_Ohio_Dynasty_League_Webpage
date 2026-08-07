<script>
	import { waitForAll } from '$lib/utils/helper';
    import LinearProgress from '@smui/linear-progress';
    import Draft from './Draft.svelte'; 

    export let upcomingDraftData, previousDraftsData, leagueTeamManagersData, playersData;
</script>

<style>
	.loading {
		display: block;
		width: 85%;
		max-width: 500px;
		margin: 80px auto;
	}

    h4 {
        text-align: center;
    }

    h6 {
        text-align: center;
    }

    .error {
        text-align: center;
        color: #d32f2f;
        padding: 20px;
    }
</style>


{#await waitForAll(upcomingDraftData, leagueTeamManagersData, playersData) }
	<div class="loading">
		<p>Retrieving upcoming draft...</p>
		<br />
		<LinearProgress indeterminate />
	</div>
{:then [upcomingDraft, leagueTeamManagers, playerData] }
    {#if upcomingDraft}
        <h4>Upcoming {upcomingDraft.year} Draft</h4>
        <Draft draftData={upcomingDraft} {leagueTeamManagers} year={upcomingDraft.year} players={playerData?.players || {}} />
    {:else}
        <div class="error">
            <p>Unable to load upcoming draft. Please try again later.</p>
        </div>
    {/if}
{:catch error}
	<!-- promise was rejected -->
	<div class="error">
        <p>Something went wrong: {error.message}</p>
    </div>
{/await}


{#await waitForAll(previousDraftsData, leagueTeamManagersData, playersData) }
	<hr />
	<h4>Previous Drafts</h4>
	<div class="loading">
		<p>Retrieving previous drafts...</p>
		<br />
		<LinearProgress indeterminate />
	</div>
{:then [previousDrafts, leagueTeamManagers, playerData] }
	<!-- Don't display anything unless there are previous drafts -->
	{#if previousDrafts && previousDrafts.length}
		<hr />
		<h4>Previous Drafts</h4>
		{#each previousDrafts as previousDraft}
			<h6>{previousDraft.year} Draft</h6>
			<Draft draftData={previousDraft} previous={true} {leagueTeamManagers} year={previousDraft.year} players={playerData?.players || {}} />
		{/each}
	{/if}
{:catch error}
	<!-- promise was rejected -->
	<div class="error">
        <p>Something went wrong loading previous drafts: {error.message}</p>
    </div>
{/await}