// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from './application';

import AssignmentController from './assignment_controller';
import GroupsController from './groups_controller';
import ProjectsController from './projects_controller';
import NotificationsController from './notifications_controller';
import PaginationController from './pagination_controller';

application.register('groups', GroupsController);
application.register('projects', ProjectsController);
application.register('notifications', NotificationsController);
application.register('assignment', AssignmentController);
application.register('pagination', PaginationController);
