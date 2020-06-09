// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// For detailed guides, please refer to https://docs.mattermost.com/deployment/desktop-app-deployment.html

/**
 * Build-time configuration. End-users can't change these parameters.
 * @prop {Object[]} defaultTeams
 * @prop {string} defaultTeams[].name - The tab name for default team.
 * @prop {string} defaultTeams[].url - The URL for default team.
 * @prop {string} defaultTeams[].order - Sort order for team tabs (0, 1, 2)
 * @prop {string} helpLink - The URL for "Help->Learn More..." menu item.
 *                           If null is specified, the menu disappears.
 * @prop {boolean} enableServerManagement - Whether users can edit servers configuration.
 *                                          Specify at least one server for "defaultTeams"
 *                                          when "enableServerManagement is set to false
 */

// Change has to be made here once the new domain is set up for final release//
const buildConfig = {
  defaultTeams: [
    {
      name: 'FlipChat',
      url: 'https://mtrmost.eastus2.cloudapp.azure.com'
      /* url : 'http://rocketchat.eastus.cloudapp.azure.com:8065'*/
      /*name: 'FlipChat'*/
	
    }
  ],
  //  Removed the mattermost Link for Help page/// // Can add after production setup is done ///
  helpLink: '',
  enableServerManagement: true,
  enableAutoUpdater: true,
};

export default buildConfig;

