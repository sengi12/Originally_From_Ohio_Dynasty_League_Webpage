import { getUpcomingDraft, getPreviousDrafts, getLeagueTeamManagers, loadPlayers } from '$lib/utils/helper';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
    try {
        const upcomingDraftData = getUpcomingDraft().catch((err) => {
            console.error('Error loading upcoming draft:', err);
            return null;
        });
        
        const previousDraftsData = getPreviousDrafts().catch((err) => {
            console.error('Error loading previous drafts:', err);
            return [];
        });
        
        const leagueTeamManagersData = getLeagueTeamManagers().catch((err) => {
            console.error('Error loading league team managers:', err);
            return [];
        });
        
        const playersData = loadPlayers(fetch).catch((err) => {
            console.error('Error loading players:', err);
            return { players: {} };
        });

        return {
            upcomingDraftData,
            previousDraftsData,
            leagueTeamManagersData,
            playersData,
        };
    } catch (err) {
        console.error('Error in drafts page load:', err);
        throw error(500, 'Failed to load drafts data');
    }
}