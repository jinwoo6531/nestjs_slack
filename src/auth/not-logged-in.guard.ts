import { Observable } from 'rxjs';
import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';

@Injectable()
export class NotLoggedInGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return !request.isAuthenticated();
  }
}
