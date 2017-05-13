require 'rails_helper'

describe Record, type: :model do
  subject {
    described_class.new(
      date: '2016-01-01',
      title: 'Honey Cake',
      amount: 4.50
    )
  }

  it 'is valid with valid attribtues' do
    expect(subject).to be_valid
  end
  it 'is not valid without a date' do
    subject.date = nil
    expect(subject).to_not be_valid
  end
  it 'is not valid without a title' do
    subject.title = nil
    expect(subject).to_not be_valid
  end
  it 'is not valid without a amount' do
    subject.amount = nil
    expect(subject).to_not be_valid
  end
end
