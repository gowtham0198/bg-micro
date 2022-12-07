import { Response } from 'express';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getRemoveImageBackground(imageUrl: any, response: Response): Promise<void>;
    send(app_id: string, user_id: string, organization_id: string, others: string, dp_image_url: string): Promise<any>;
}
