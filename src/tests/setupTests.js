import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import dotenv from 'dotenv'

Enzyme.configure({ adapter: new Adapter() })
dotenv.config({ path: '.env.test' })