import { Rule } from '@angular-devkit/schematics';
import { Schema as ComponentOptions } from './schema';
/**
 * Configures and creates component to use with sidemenu layout, through steps below:
 * - Create a app.component with components to do sidemenu layout;
 * - Imports RouterModule in app root module;
 */
export default function (options: ComponentOptions): Rule;
