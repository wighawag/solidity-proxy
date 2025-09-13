import {HardhatUserConfig} from 'hardhat/config';

import HardhatDeploy from 'hardhat-deploy';
import {addForkConfiguration, addNetworksFromEnv} from 'hardhat-deploy/helpers';

const config: HardhatUserConfig = {
	plugins: [HardhatDeploy],
	solidity: {
		profiles: {
			default: {
				version: '0.8.20',
				settings: {
					optimizer: {
						enabled: false,
					},
				},
			},
			production: {
				version: '0.8.20',
				settings: {
					optimizer: {
						enabled: true,
						runs: 999999,
					},
				},
			},
		},
	},
	// this add automatic fork configuration
	networks: addForkConfiguration(
		// this add network for each respective env var found (ETH_NODE_URI_<network>)
		// it will also read MNEMONIC_<network> to populate the accounts
		// Note that if you set these env variable to have the value: "SECRET" it will be like using:
		//  configVariable('SECRET_ETH_NODE_URI_<network>')
		//  configVariable('SECRET_MNEMONIC_<network>')
		addNetworksFromEnv({
			hardhat: {
				type: 'edr-simulated',
				chainType: 'l1',
			},
		})
	),
	paths: {
		sources: ['solc_0_8'],
	},
};

export default config;
