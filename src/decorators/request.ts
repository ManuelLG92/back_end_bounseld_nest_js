import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IRequestDetail } from '../util';
/* export type IRequestDetail = {
 originalUrl?: string;
 hostname?: string;
 ip?: string;
 userAgent?: string;
 /*  ?: string;
 region?: string;
 timezone?: string;
 countryCode?: string;
 browser?: string;
 operatingSystem?: string;
 'x-transaction-id'?: string;
};
*/
export const RequestDetails = createParamDecorator(
  (_data: string, context: ExecutionContext): IRequestDetail => {
    return parseRequestDetails(context.switchToHttp().getRequest());
  },
);

export const parseRequestDetails = (req: any): IRequestDetail => {
  console.log('request decorator', req.ip, req.userIp, req);
  return {
    ip: req.ip,
    originalUrl: req.originalUrl,
    hostname: req.headers.host,
    userAgent: req.headers['user-agent'],
    /*    city: req.city,
    region: req.region,
    timezone: req.timezone,
    countryCode: req.countryCode,
    browser: req.browser,
    operatingSystem: req.operatingSystem,
    'x-transaction-id': uuidv4(),*/
  };
};
