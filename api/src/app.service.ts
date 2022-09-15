import { Injectable } from '@nestjs/common';
import { FB } from 'fb';

@Injectable()
export class AppService {
	/**
	 * It makes a Facebook API call, maps the data, and returns it in a format that is easier to use
	 * @returns An object with three properties: campaignNames, campaignImpressions, and data.
	 */
	async getFBdata() {
		/* This is a Facebook API call. */
		FB.options({ version: 'v14.0' });
		FB.setAccessToken(process.env.ACCESS_TOKEN);
		const FBdata = await FB.api(
			'act_25064918/insights?fields=campaign_id,campaign_name,impressions&level=campaign&time_range[since]=2021-01-01&time_range[until]=2022-01-01',
			'get'
		);
		/* Mapping the data from the Facebook API call and returning it in a format that is easier to use. */
		const { data } = FBdata;
		const campaignNames = [];
		const campaignImpresssions = [];
		const mappedData = data.map(obj => {
			campaignNames.push(obj.campaign_name);
			campaignImpresssions.push(obj.impressions);
			return {
				compaignName: obj.campaign_name,
				impressions: obj.impressions
			};
		});

		return {
			campaignNames,
			campaignImpresssions,
			data: mappedData
		};
	}
}
