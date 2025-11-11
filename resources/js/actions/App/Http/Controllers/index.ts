import TrialController from './TrialController'
import Settings from './Settings'
import Auth from './Auth'
const Controllers = {
    TrialController: Object.assign(TrialController, TrialController),
Settings: Object.assign(Settings, Settings),
Auth: Object.assign(Auth, Auth),
}

export default Controllers