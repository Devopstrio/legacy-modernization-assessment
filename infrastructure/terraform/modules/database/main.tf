resource "aws_db_instance" "assess_db" {
  identifier        = "modern-assess-db-${var.env}"
  engine            = "postgres"
  engine_version    = "15.3"
  instance_class    = "db.t3.medium"
  allocated_storage = 20
  
  db_name  = "modern_assess"
  username = var.db_user
  password = var.db_password

  vpc_security_group_ids = [var.db_sg_id]
  db_subnet_group_name   = var.db_subnet_group

  skip_final_snapshot = true
}
