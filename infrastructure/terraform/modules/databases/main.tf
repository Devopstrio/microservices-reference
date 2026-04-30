resource "aws_db_instance" "service_db" {
  for_each = toset(["user", "order", "payment", "inventory"])

  identifier        = "mico-${each.key}-db-${var.env}"
  engine            = "postgres"
  engine_version    = "15.3"
  instance_class    = "db.t3.medium"
  allocated_storage = 20
  
  db_name  = "${each.key}_db"
  username = var.db_user
  password = var.db_password

  vpc_security_group_ids = [var.db_sg_id]
  db_subnet_group_name   = var.db_subnet_group

  skip_final_snapshot = true
  
  tags = {
    Service = each.key
    Environment = var.env
  }
}
