provider "aws" {
  region = "us-west-2"
}

variable "instance_name" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "Pro-Trading-Server"
}

variable "ami_id" {
  type    = string
  default = "ami-0c55b159cbfafe1f0"
}

variable "instance_name_2" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "Pro-Trading-Server_2"
}

variable "ami_id_2" {
  type    = string
  default = "ami-0c55b159123456"
}

resource "aws_instance" "example_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "TerraformDemoInstance"
  }
}

resource "aws_instance" "app_server" {
  ami           = var.ami_id
  instance_type = "t2.micro"

  tags = {
    Name = var.instance_name
  }
}

resource "aws_instance" "app_server_2" {
  ami           = var.ami_id_2
  instance_type = "t2.micro"

  tags = {
    Name = var.instance_name_2
  }
}
