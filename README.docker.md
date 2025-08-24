# 🐳 Docker Setup for Eder Barrios Portfolio

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and run the container
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop the container
docker-compose down
```

### Using Docker directly

```bash
# Build the image
docker build -t eder-barrios-cv .

# Run the container
docker run -p 3000:3000 --name eder-portfolio eder-barrios-cv

# Stop the container
docker stop eder-portfolio
docker rm eder-portfolio
```

## Available Commands

```bash
# View logs
docker-compose logs -f

# Rebuild without cache
docker-compose build --no-cache

# Remove everything (containers, images, volumes)
docker-compose down --rmi all --volumes --remove-orphans
```

## Access

Once running, the portfolio will be available at:
- **Local**: http://localhost:3000
- **Network**: http://YOUR_IP:3000

## Docker Configuration

- **Base Image**: Node.js 18 Alpine
- **Port**: 3000
- **Environment**: Production optimized
- **Security**: Runs as non-root user (nextjs)
- **Size**: Multi-stage build for minimal image size

## Environment Variables

The container uses these environment variables:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## Troubleshooting

If you encounter issues:

1. **Port already in use**: Change the port in docker-compose.yml
2. **Build fails**: Clear Docker cache with `docker system prune -a`
3. **Permission issues**: Ensure Docker daemon is running