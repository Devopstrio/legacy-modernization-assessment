resource "aws_eks_cluster" "assess_cluster" {
  name     = "modern-assess-cluster-${var.env}"
  role_arn = var.eks_role_arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}

resource "aws_eks_node_group" "assess_nodes" {
  cluster_name    = aws_eks_cluster.assess_cluster.name
  node_group_name = "assess-workers"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.subnet_ids

  scaling_config {
    desired_size = 2
    max_size     = 5
    min_size     = 2
  }

  instance_types = ["t3.xlarge"]
}
