# Create a Web Application Firewall to protect our future Application Load Balancer
resource "aws_wafv2_web_acl" "main" {
  name  = "learnbridge-edu-waf-acl"
  scope = "REGIONAL" # Use REGIONAL for ALBs, CLOUDFRONT for CloudFront distributions

  default_action {
    allow {}
  }

  # Rule 1: AWS Managed Rule for common exploits
  rule {
    name     = "AWS-Managed-Core-Rule-Set"
    priority = 1

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        vendor_name = "AWS"
        name        = "AWSManagedRulesCommonRuleSet"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "waf-common-rules"
      sampled_requests_enabled   = true
    }
  }

  # Rule 2: AWS Managed Rule for SQL injection attacks
  rule {
    name     = "AWS-Managed-SQLi-Rule-Set"
    priority = 2

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        vendor_name = "AWS"
        name        = "AWSManagedRulesSQLiRuleSet"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "waf-sqli-rules"
      sampled_requests_enabled   = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "waf-main-acl"
    sampled_requests_enabled   = true
  }
}