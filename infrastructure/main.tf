terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # This is critical for collaboration. It stores the state file in an S3 bucket.
  # We will manually create this bucket first.
  backend "s3" {
    bucket = "learnbridge-edu-terraform-state-bucket" # MUST BE A GLOBALLY UNIQUE NAME
    key    = "global/terraform.tfstate"
    region = "us-east-1"
    # You will create an accompanying DynamoDB table for state locking
    dynamodb_table = "learnbridge-edu-terraform-locks"
  }
}

provider "aws" {
  region = "us-east-1"
}