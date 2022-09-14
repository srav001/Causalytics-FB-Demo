import { Injectable } from '@nestjs/common';
import { FB } from 'fb';

@Injectable()
export class AppService {
	async getFBdata() {
		FB.options({ version: 'v14.0' });
		FB.setAccessToken(process.env.ACCESS_TOKEN);
		const FBdata = await FB.api(
			'act_25064918/insights?fields=campaign_id,campaign_name,impressions&level=campaign&time_range[since]=2021-01-01&time_range[until]=2022-01-01',
			'get'
		);
		return FBdata;
	}
}
