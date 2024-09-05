import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  category: string;
  title: string;
  price: string;
  mode: string;
  location: string;
  quantity: string;
  startDate: string;
  endDate: string;
  days: string;
  gender: string;
  startTime: string;
  endTime: string;
  ageGroup: string;
  description: string;
}

const initialState: FormState = {
  category: 'Category1',
      title: 'Sample Title',
      price: "100",
      mode: 'Online',
      location: 'New York',
      quantity: "10",
      startDate: '2024-09-01',
      endDate: '2024-09-10',
      days: "2",
      gender: 'Any',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      ageGroup: '18-25',
      description: 'This is a sample description',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { setForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
