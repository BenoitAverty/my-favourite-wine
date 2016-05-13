import { connect } from 'react-redux';

import { mapDispatchToProps, mapStateToProps } from './redux-mapping';
import RateWineSection from './internal-component';

export default connect(mapStateToProps, mapDispatchToProps)(RateWineSection);
