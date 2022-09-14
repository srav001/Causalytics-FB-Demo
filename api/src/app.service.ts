import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getFBdata() {
		return 'FB DATA HERE!';
	}
}
