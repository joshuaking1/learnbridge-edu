# This data source finds the OIDC provider for GitHub Actions
data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

# This is the IAM role our GitHub Actions pipeline will assume.
# It's more secure than storing static AWS keys in GitHub secrets.
resource "aws_iam_role" "github_actions_role" {
  name = "learnbridge-edu-github-actions-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = {
          Federated = data.aws_iam_openid_connect_provider.github.arn
        },
        Action    = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringLike = {
            "token.actions.githubusercontent.com:sub" : "repo:YOUR_GITHUB_USERNAME/YOUR_REPO_NAME:*"
          }
        }
      }
    ]
  })
}

# Define the policy for what the role can do.
# We will start with basic permissions and expand as needed.
resource "aws_iam_policy" "github_actions_policy" {
  name        = "learnbridge-edu-github-actions-policy"
  description = "Policy for the LearnBridgeEdu GitHub Actions role"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      # Add permissions here later, e.g., to deploy to EKS, S3, etc.
      {
        Effect   = "Allow",
        Action   = "sts:AssumeRole",
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_custom_policy" {
  role       = aws_iam_role.github_actions_role.name
  policy_arn = aws_iam_policy.github_actions_policy.arn
}