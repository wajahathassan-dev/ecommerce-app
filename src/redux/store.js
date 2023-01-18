import { configureStore } from '@reduxjs/toolkit';
import manageSlicer from './manage';

export default configureStore({
    reducer: {
        manage: manageSlicer
    }
});