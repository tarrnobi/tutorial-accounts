class Record < ApplicationRecord
  validates_presence_of :date, :title, :amount
end
