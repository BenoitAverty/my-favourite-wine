import { connect } from 'react-redux';

import { mapDispatchToProps, mapStateToProps } from './redux-mapping';
import WineSearch from './internal-component';

export default connect(mapStateToProps, mapDispatchToProps)(WineSearch);
