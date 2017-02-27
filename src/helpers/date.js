import moment from 'moment';

import { DEFAULT_DATE_FORMAT } from 'constants/date';

moment.locale('ru');

export const formatDate = time =>
  moment(time).format(DEFAULT_DATE_FORMAT);
